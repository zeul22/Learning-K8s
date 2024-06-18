import dotenv from "dotenv"
import express from "express"

const port=8080;

const app=express();
dotenv.config({
    origin:"*"
})


app.listen(port,(req,res)=>{
    console.log(`Server is Running on ${port}` );
})