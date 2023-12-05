import Review from '../models/Review.js'


const postapireview= async(req,res)=>{

    const { user, description, rating}=req.body

    const reviewPost = new Review({

        user,description,rating
    })

    const savedPost = await  reviewPost.save()

   return res.status(201).json(
        {
            success:true,
            message:"Review Posted",
            data:savedPost
        }
    )
}

const getapireview = async(req,res)=>{

     const getallreview = await Review.find().populate('user')

     res.status(201).json({
        success:true,
        data:getallreview,
        message:"successfully fetch all review"

     })
}

export { postapireview,getapireview}