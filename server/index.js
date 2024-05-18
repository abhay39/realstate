import express from 'express';
import addListing from './routes/LisitingRoutes.js'
import cors from 'cors';
import mongoose from 'mongoose';

const app = express();
app.use(express.json());
app.use(cors());


app.get("/",async(req,res)=>{
    res.json({
        message:"Hello World"
    })
})

const connectMongo=async()=>{
    try{
        await mongoose.connect("mongodb://localhost:27017/realestate")
        console.log("Connect to DB");
    }catch(err){
        console.log(err.message);
        process.exit(1);
    }
}

connectMongo();

app.use("/api/v1/listings",addListing)

app.post("/addNewListing", async (req, res) => {
    
});


app.listen(9999,()=>{
    console.log("Server is running on port 6000");
});