import User from "../schema/user.schema.js";

export  class googleSignInController {
 
    signInSuccess = async (req, res) => {
       
        const userData =  req.user._json;
      
        const { email, name, sub } = userData;
      

        if (email) {
            const user = await User.findOne({email:email});
            if (user) {
                req.session.userEmail = email;
                return res.status(200).render("homepage");
            }
            const newUser = new User({username:name, email:email, password:sub});
            await newUser.save();
            req.session.userEmail = email;
            return res.status(200).render("homepage");
        }else {
            res.status(403).json({ error: true, message: "Not Authorized" });
        }
    }

    signInFailed = (req, res) => {
        res.status(401).json({
            error: true,
            message: "Log in failure",
        });
    }

}