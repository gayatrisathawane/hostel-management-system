import mongoose from "mongoose";
import express  from "express";
import dotenv from 'dotenv'
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



app.listen(PORT ,()=>{
    console.log(`server is running ${PORT} `);
    
});

