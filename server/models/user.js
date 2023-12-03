import { Schema, model} from "mongoose";

const userSchema = new Schema({
    name: {
        type: String,
        default: '_'
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
    }
})

const User = model('user', userSchema)

export default User