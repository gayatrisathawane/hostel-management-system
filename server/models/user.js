import { Schema, model} from "mongoose";

const userSchema = new Schema({
  
    name: {  
        type: String,
        required:true
    },
    lastname:{
        type: String,
        required:true

    },
    mobile: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique:true
    },
     
    gender: {
        type: String,
        default: 'prefect not to say'
    },
    role:{
        type:String,
        enum: ["user", "admin"],
        default:'user'
    },
    image:{
        type:String,
        
    }
})

const User = model('User', userSchema)

export default User