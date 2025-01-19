// require('dotenv').config({path:'./env'}) 
// -->> it will work but code consistency is  missing because everywhere we are using import syntax so we should use import syntax here also

import connectDB from "./db/index.js";  // connectDB is imported from db.js

import dotenv from "dotenv";  // dotenv is imported from dotenv module
dotenv.config({ path: "./env" });  // dotenv.config() is called with path as argument


connectDB() // connectDB function is called
.then(()=>{
    // check error event while connecting to server 
    // error is an event in nodejs which is emitted when an error occurs

    app.on("error",(error)=>{
        console.log("Error in connecting to server",error);
        throw error;
    })
    app.listen(process.env.PORT ||8000,()=>{
        console.log(`Server is running on port ${process.env.PORT || 8000}`);   
    })
})
.catch((err) =>{
    console.log("Error in connecting to database", err);
})
























/* first approach to connect to server 

import express from "express";  // express is imported from express module
const app = express();  // express() is assigned to app variable



// IIFEE -->>  immediately invoked function expression    

// syntax of IIFEE 
/*
(function (){ 
    // Function Logic Here. 
    })();
*/


/*
(async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error", (error) => {
            console.log("Error in connecting to server", error);
            throw error;
        })
        app.listen(process.env.PORT, () => {
            console.log(`Server is running on port ${process.env.PORT}`);
        })


    } catch (error) {
        console.log("Error: ", error);
        throw error;
    }
})()
*/