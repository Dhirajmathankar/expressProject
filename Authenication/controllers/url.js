const authModel = require("../models/auth")


async function myurlhandller (req, res){
	// const {email, password} = req.body ;
	// try {
	// 	const result = await authModel.find({email, password})
	// 	// if (result.length != 0) {
	// 	// 	res.cookie('userId', result.uuid);
	// 	// 	res.redirect("/url/", authdataIDContainer)
	// 	// } 
	// 	// else res.redirect("/login");
	  
	// } catch (error) {
	// 	res.redirect("/login");
	// }
	console.log("-----------NODE");
	res.render("./pages/urlshortner");
}


module.exports = { myurlhandller }