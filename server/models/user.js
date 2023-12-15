import { Schema, model} from "mongoose";

const userSchema = new Schema({
    type:{
        type: String,
        enum:["admin", "user"],
        required:true
    },
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
        default:'user'
    },
    image:{
        type:String,
        
    }
})

const User = model('User', userSchema)

export default User