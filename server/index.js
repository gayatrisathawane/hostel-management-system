import mongoose from "mongoose";
import express  from "express";
import RoomCard from "./mod/RoomCard";
import dotenv from 'dotenv'
dotenv.config()

const app = express()

app.use(express.json())

const PORT = process.env.PORT || 8080


//connection of mongodb 


const mongoDb = async()=>{

    const connect = await mongoose.connect(process.env.MONGO_DB)

    if(connect){
        console.log("mongo db connect ")
    }
}
mongoDb()


app.post('/room', async (req, res) => {

    const { title, description,candidate, price, type, stars, image } = req.body
  
    const RoomCard = new RoomCard({
      title: title,
      description: description,
      price: price,
      type: type,
      candidate:candidate,
      stars: stars,
      image: image
    })
    const saveRoomCard = await RoomCard.save();
    res.json({
      success: true,
      data: saveRoomCard,
      message: "Product added successfully"
    })
  })
app.listen(PORT ,()=>{
    console.log(`app listen on port ${PORT} `)
})

