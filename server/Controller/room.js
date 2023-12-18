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
            message: err.message
          })
       }
    }

    const getApiAllRoom = async (req,res)=>{
 

        const allRoom = await Room.find();
    
        return res.json({
            success: true,
            message: "Successfully fetched all rooms",
            data: allRoom
        })
    }
    const editRoom = async (req, res) => {
      const { id } = req.params
  
      const { title, description,candidate, price, type,image } = req.body;
  
      await Room.updateOne({ _id: id },
          {
              $set: {
                title, description,candidate, price, type,image
              }
          })
  
      const updateRoom = await Room.findOne({ _id: id })
  
  
      res.json({
          success: "true",
          data: updateRoom,
          message: "Room details update successfully.!"
      })
  }


 const getRoomApi = async(req,res)=> {

      const {id}=req.params;
      try{
        const getroombyId = await Room.findOne({ _id :id})

    return  res.json({
      success:true,
      message:"room fetched",
      data:getroombyId
    })

      }catch(err){
        return  res.json({
          success:false,
          message:err.message
          
        })
      }

    }

    export {postApiRoom, getApiAllRoom, getRoomApi, editRoom};