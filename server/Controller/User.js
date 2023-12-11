import User from './../models/User.js'

//post Signup
const postApiSignup =  async(req, res) => {
    const { name, mobile, email, password, gender,image } = req.body;

    const user = new User({
        name,
        email,
        mobile,
        password,
        gender,
        image
    })
   
    try{
        const saved = await user.save();
        return res.json({
            success: true,
            data: saved,
            message:'Signup successfully'
        });
    }
    catch(err){
        return res.json({
            success:false,
            message:(err.message)
        })
    }

}

//post login

const postApiLogin = async (req, res) => {
    const { email, password } = req.body;
    
    const user = await User.findOne({ email: email,  password: password});
   
    if(user) {
        return res.json({
            success: true,
            data: user,
            message:"successfully login"
        })
    }
    else{
        return res.json({
            success:false,
            message:"Invalid email and password"
        })
    }
}

export {postApiSignup, postApiLogin }