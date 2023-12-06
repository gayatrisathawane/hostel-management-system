import Room from './../models/Room.js'

const postApiRoom = async (req, res) => {   
    const { title, description,candidate, price, type,image } = req.body
      
        const roomcard = new Room({
          title: title,
          description: description,
          price: price,
          type: type,
          candidate:candidate,
          image: image
        })
       try{
        const saveRoomCard = await roomcard.save();

        return res.json({
          success: true,
          message: "Room added successfully",
          data: saveRoomCard
        })
       }
       catch(err){
        res.json({
            success: false,
            message: "err.message"
          })
       }
    }

    const getApiRoom = async (req,res)=>{
 

        const allRoom = await Room.find();
    
        return res.json({
            success: true,
            message: "Successfully fetched all rooms",
            data: allRoom
        })
    }

    export {postApiRoom,getApiRoom}