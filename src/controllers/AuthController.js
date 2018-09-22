const {users} = require('../models')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const config = require("../config/config")

module.exports = {
	async login (req,res){

		await users.findOne({ username: req.body.username }).then(user =>{
			console.log(req.body.password);
			if(bcrypt.compareSync(req.body.password, user.password)){
				var token = jwt.sign({ id: user._id }, config.secret, {
     				expiresIn: 86400
    			});

    			res.status(200).send({ token: token });
			}else{
				res.status(400).send({
		   			message: "Password not correct."
		   		})
			}
		}).catch(error =>{
			res.status(400).send({
		   		message: "Username not found."
		   	})
		})
	},
	async register (req,res){
		var hashedPassword = bcrypt.hashSync(req.body.password, 8)
		var body = req.body
			body.password = hashedPassword

			try{
				await users.create(body).then(user => {
				    res.status(201).send({ 
				    	id: user._id, message: "User registered." 
				    })
				}).catch(error => {
				   res.status(400).send({
				   		message: "User already exists."
				   })
				})
			}catch(error){
				res.status(400).send({
				   		message: "User registration failed."
				})
			}
	}
}