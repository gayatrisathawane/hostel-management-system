import  {Schema,model} from "mongoose";

const reviewSchema = new Schema({

    user:{
      type:Schema.Types.ObjectId,
      ref:'User'
    },
    description:{
        type:String,
        required:true
    },
    rating:{
        type:String,
        default:"4"
    }

},{timestamps:true}) 

const Review = model('Review',reviewSchema)

export default Review
