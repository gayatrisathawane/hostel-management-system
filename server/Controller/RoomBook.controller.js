import { Roombook } from "../models/RoomBook.js";

const postapiroombook = async(req,res)=>{

    const {user,room,candidate}= req.body

    const savedRoomBook = new Roombook({
        user,room,candidate

    })

    try{
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

export{postapiroombook}