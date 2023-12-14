import {model, Schema} from 'mongoose'

const roomBookSchema = new Schema({

    user:{
        type:Schema.Types.ObjectId,
        ref:'User'
    },
    room:{
        type:String,
        ref:'Room'
    },
    candidate:{
        type:'Number',
        required:true
    }

},{timestamps:true})

export const Roombook = model('Roombook',roomBookSchema)