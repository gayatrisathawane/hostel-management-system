import mongoose from "mongoose";
import express  from "express";
import dotenv from 'dotenv'
// import User from "./models/user.js";
import {postApiLogin, postApiSignup} from './Controller/User.js'
import{postapireview,getapireview} from './Controller/Review.controller.js'
import {postApiRoom,getApiRoom} from './Controller/room.js'

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
// post /room
app.post('/api/room',postApiRoom)

//get /room
app.get('/api/rooms',getApiRoom)


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

