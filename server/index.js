import mongoose from "mongoose";
import express  from "express";
import dotenv from 'dotenv';
// import User from "./models/user.js";
import {postApiLogin, postApiSignup} from './controlers/transaction.js'
dotenv.config()

const app = express()

app.use(express.json())

const PORT = process.env.PORT || 5000


//connection of mongodb 


const mongoDb = async()=>{

    // post signup

    

    const connect = await mongoose.connect(process.env.MONGODB_URI)

    if(connect){
        console.log("mongo db connect successfully ")
    }
}
mongoDb()

// post signup
app.post('/api/signup', postApiSignup )

//post login
app.post('/api/login', postApiLogin)

app.listen(PORT ,()=>{
    console.log(`server is running ${PORT} `);
    
});

