import mongoose from "mongoose";
import express  from "express";
import dotenv from 'dotenv'
dotenv.config()

const app = express()

const PORT = process.env.PORT || 8080




app.listen(PORT ,()=>{
    console.log(`app listen on port ${PORT} `)
})

