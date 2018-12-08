const express = require('express')
const fs = require('fs')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const {sequelize} = require('./models')
const config = require('./config/config')
const schedule = require('node-schedule')
const nodemailer = require('nodemailer');
const moment = require('moment');
const formatCurrency = require('format-currency')

const https = require('https')
const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: "admin@davohjewelryco.com",
    pass: "042895Ced!"
  } 
});

require('./routes')(app)

sequelize.sync().then(() => {
  https.createServer({
    key: fs.readFileSync('server.key'),
    cert: fs.readFileSync('server.cert')
  }, app)
  .listen(config.port)

  //Compute Sales, Commission and Expense Today
  const {products} = require('./models')
  const {product_status} = require('./models')
  const {product_details} = require('./models')
  const { expenses } = require('./models')

  const date_now = moment().format("YYYY-MM-DD");
  
  // Email Sales and Expense every 5pm
  const mailJob = schedule.scheduleJob('30 16 * * *', function(){
    products.findAll({include:[product_details,product_status]}).then(products => {
      let products_today = products.filter( function(product){
        return moment(date_now,"YYYY-MM-DD").isSame(product.product_status.sold_date);
      });
  
      let total_sales = 0;
      let total_commission = 0;
      let total_expenses = 0;
  
      products_today.filter( function(product){  
        total_sales += product.product_status.selling_price;  
        total_commission += product.product_status.commission;  
      });
  
      expenses.findAll().then(expenses => {
        let expenses_today = expenses.filter( function(expense){
          return moment(date_now,"YYYY-MM-DD").isSame(moment(expense.date).format("YYYY-MM-DD"));
        });
  
        expenses_today.filter( function(expenses){
          total_expenses += expenses.amount;  
        });
        
        const currency_options = { format: '%v %c',code:"PHP", symbol: '₱' }

        const mailOptions = {
          from: '"Davoh Admin" <admin@davohjewelryco.com>',
          to: 'sahilparikh@davohjewelryco.com',
          subject: 'Davoh Daily Report',
          html: '<b>Report for '+moment().format('MMMM D, YYYY')+' </b><br><p>Total Sales: '+formatCurrency(total_sales, currency_options)+'</p><p>Total Commission: '+formatCurrency(total_commission, currency_options)+'</p><p>Total Sales: '+formatCurrency(total_expenses, currency_options)+'</p><br><a href="http://admin.davohjewelryco.com" target="_blank">Davoh Admin</a>'
        }

        transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
              return console.log(error);
          }
          console.log('Message sent: %s', info.messageId);
        });
      });
    });
  });
});
