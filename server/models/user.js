import { Schema, model} from "mongoose";

const userSchema = new Schema({
    
    name: {  
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
        default:'user'

    }
})

const User = model('User', userSchema)

export default User