import Roombook  from "../models/RoomBook.js";

const postapiroombook = async(req,res)=>{

    const {user,room,candidate}= req.body

    const roomcard=  new Roombook({
        user,room,candidate
    })

    try{
        const savedRoomBook = await roomcard.save();
        return res.json({
            success:true,
            message:"Book Romm successfully",
            data:savedRoomBook
        })

    }catch(e){
        return res.json({
            success:false,
            message:e.message,
           
        })

    }
}

const getRoomBook = async(req,res)=>{
    const {_id} = req.params;
    const rooms = await Roombook.find({user:_id}).populate("user room")

    res.json({
        success:true,
        data:rooms,
        message:"Room Book successfully"
    })
}

export{postapiroombook, getRoomBook}