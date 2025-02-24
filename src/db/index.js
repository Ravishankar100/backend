import mongoose from 'mongoose';    
import { DB_NAME } from '../constants.js';  // DB_NAME is imported from constants.js

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log(`\n MongoDB connected !! DB HOST:${connectionInstance.connection.host} \n`);
    } catch (error) {
        console.log("MongoDB Connection Error: ", error);
        process.exit(1);
    }
};

export default connectDB;
