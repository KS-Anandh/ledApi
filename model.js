import mongoose from "mongoose";

const ledSchema=mongoose.Schema(
    {          
        ledName:{
            type:String,
            required:true
        },
        ledStatus:{
            type:Boolean,
            required:true
        },
        ledBright:{
            type:Number,
            required:true
        }
    }
)

const leds=mongoose.model("led",ledSchema);
export default leds;