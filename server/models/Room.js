import { Schema, model } from "mongoose";

const roomSchema = new Schema({
    title :{
        type: String,
        required:true
    },
    description :{
        type: String,
        required: true
    },
    price :{
        type: Number,
        required: true
    },
    type:{
        type: String,
        enum : ["furnish","unfurnish", "semi-fernish"],
        required: true
    },
    candidate :{
        type: String,
        required: true
    },
    image : {
        type: String,
        required: true
    }
},{
    timestamps: true,
});

const Room = model('Room', roomSchema);

export default  Room;