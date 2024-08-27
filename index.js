import express from 'express'
import mongoose from 'mongoose';
import leds from './model.js';
import cors from 'cors'
const app=express();
app.use(express.json())
app.use(cors())
app.get("/",(req,res)=>{
    try{res.send("API Running...");}
    catch{}
})
app.post("/led",async(req,res)=>{
    const {ledName,ledStatus,ledBright}=req.body;
    try{
        const newLed=new leds({ledName,ledStatus,ledBright})
        await newLed.save();
        return res.status(200).json("LED Added..");
    }
    catch{
       return res.status(500).json("Server Error..");
    }
})
app.get("/led",async(req,res)=>{
    try{
        const data=await leds.find({})
        return res.status(200).json(data);
    }
    catch{
       return res.status(500).json("Server Error..");
    }
})
app.put("/led/:id",async(req,res)=>{
     const {id}=req.params;
    try{
         await leds.findByIdAndUpdate(id,req.body);
        return res.status(200).json("Updated Successfully");
    }
    catch{
       return res.status(500).json("Server Error..");
    }
})

mongoose.connect("mongodb+srv://ks_anandh:nandha1432@cluster0.q8u6zz9.mongodb.net/led_api?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
    console.log("DataBase Connected...");
    app.listen(9700,()=>{
        console.log("running in port 9700");
    })
})
.catch((err)=>{console.log(err)})
