import {model, Schema} from 'mongoose'

const roomBookSchema = new Schema({

    user:{
        type:Schema.Types.ObjectId,
        ref:'User'
    },
    room:{
        type:Schema.Types.ObjectId,
        ref:'Room'
    },
    candidate:{
        type:'Number',
        required:true
    }

},{timestamps:true})

const Roombook = model('Roombook',roomBookSchema);
export default Roombook;