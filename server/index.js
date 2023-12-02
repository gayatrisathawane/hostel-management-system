import mongoose from "mongoose";
import express  from "express";
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



app.listen(PORT ,()=>{
    console.log(`app listen on port ${PORT} `)
})

