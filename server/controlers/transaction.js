
import User from './../models/user.js';

//post Signup
const postApiSignup =  async (req, res) => {
    const { name, mobile, email, password, gender } = req.body;

    const user = new User({
        name,
        email,
        mobile,
        password,
        gender,
    })
   
    try{
        const saved = await user.save();
        return res.json({
            success: true,
            data: saved,
            message: 'Signup successfully'
        });
    }
    catch(err){
        return res.json({
            success:false,
            message:err.message
        })
    }

}

//post login

const postApiLogin = async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email: email,  password: password}).select('name mobile email');
    if (user) {
        return res.json({
            success: true,
            data: user,
            message: "successfully login"
        })
    }
    else{
        return res.json({
            success: "Invalid email and password"
        })
    }
}

export {postApiSignup, postApiLogin }