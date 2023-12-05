import mongoose from "mongoose";
import express  from "express";
import RoomCard from "./models/Room.js";
import dotenv from 'dotenv'
// import User from "./models/user.js";
import {postApiLogin, postApiSignup} from './controlers/transaction.js'
import{postapireview,getapireview} from './controlers/Review.controller.js'

dotenv.config()

const app = express()

app.use(express.json())

const PORT = process.env.PORT || 5000


//connection of mongodb 


const mongoDb = async () => {
    try {
        const connect = await mongoose.connect(process.env.MONGO_DB)

        if (connect) {
            console.log("MongoDB connected successfully")
        }
    } catch (error) {
        console.log(error)
    }
}

mongoDb()


// post signup
app.post('/api/signup', postApiSignup )

//post login
app.post('/api/login', postApiLogin)


app.post('/api/v1/reviews',postapireview)
app.get('/api/v1/reviews',getapireview)

// room card Api-------------
// post room----------------
app.post('/postroom', async (req, res) => {   
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
      message: "Room added successfully"
    })
})
// search room---------------
app.get('/searchroom', async (req, res) => {
    const { q } = req.query
    const searchroom = await RoomCard.findOne({ name: { $regex: q, $options: 'i' } })
    res.json({
      sucess: true,
      products: searchroom,
      message: "Room searched successfully"
    })
  })
app.listen(PORT ,()=>{
    console.log(`server is running ${PORT} `);
    
});

