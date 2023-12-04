import mongoose from "mongoose";
import express  from "express";
import dotenv from 'dotenv';
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


mongoDb();



// post signup
app.post('/api/signup', postApiSignup )

//post login
app.post('/api/login', postApiLogin)


app.post('/api/v1/reviews',postapireview)
app.get('/api/v1/reviews',getapireview)

app.listen(PORT ,()=>{
    console.log(`server is running ${PORT} `);
    
});

