const User = require("../models/User")


module.exports.profile = (req, res) => {
    res.render('profile');

}

// rendering login page
module.exports.signin = (req, res) => {
    res.render("sign_in", {
        title: "Codail Sign in"
    })
}
// rendering singup page

module.exports.signup = (req, res) => {
    res.render("sign_up", {
        title: "Codial | Sign up"
    })
}

// get the sign up data
module.exports.create = async (req, res) => {
    if (req.body.password !== req.body.confirm_pass) {
        res.redirect("back");
    }

    try {
        const data = await User.findOne({
            email : req.body.email
        });
  
        if (!data) {
          User.create({
            email : req.body.email,
            name : req.body.name,
            password : req.body.password,
            confirm_pass : req.body.confirm_pass
          });
          res.redirect("/users/sign-in");
        } else {
            res.redirect("back");
        }
  
      
      } catch (error) {
        console.log(error);
      }
    

}

module.exports.createSession = (req, res) => {
    //Todo later
}