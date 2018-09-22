module.exports = {
	port:8010,
	db:{
		database: "store",
		user:"root",
		pass:"",
		options:{
			dialect:"mysql",
			host:"localhost",
			port:3306
		}
	},
	secret: 'secrets'
}