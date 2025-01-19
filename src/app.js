import express, { urlencoded } from 'express';  
import cors from 'cors'; 
import cookieParser from 'cookie-parser';   
const app= express();  

// middleware we use "app.use()" method to use middleware   

app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentilas:true

}))
app.use(express.json({limit:'20kb'})); // to get data as a json format with limit of 20kb 


app.use(express.urlencoded({extended:true,limit:"20kb"})); // to get data as a urlencoded format sometime when user send request so it is like % or + sign in url so we use this middleware to get data in proper format

app.use(express.static('public')); // to store  static file like images, css, js etc in public folder

app.use(cookieParser()); // to use cookie parser middleware
















export default app; 
// or 
// export {app};