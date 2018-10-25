const {users} = require('../models')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const config = require("../config/config")

module.exports = {
	async login (req,res){
		await users.findOne({
			where: {
			  username: req.body.username
			}
		  }).then(user =>{
			if(bcrypt.compareSync(req.body.password, user.password)){
	
				var token = jwt.sign({ id: user._id }, config.secret, {
					expiresIn: 86400
				});

				delete user.dataValues.password;
				res.status(200).send({ token: token, data: user });
			}else{
				res.status(400).send({
		   			message: "Password not correct."
		   		})
			}
		}).catch(error =>{
			res.status(400).send({
		   		message: "Username not found. "+error
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
				   		message: error.message
				   })
				})
			}catch(error){
				res.status(400).send({
				   		message: "User registration failed."
				})
			}
	}
}