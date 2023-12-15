import Room from './../models/Room.js'

const deleteApiRoom = async(req,res)=>{

    const { _id }=req.params

     await  Room.deleteOne({_id:_id})

     res.json({
        success: true,
        message: "delete Room successfully "
    })
}

export {deleteApiRoom}