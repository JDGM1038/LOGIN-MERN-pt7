import mongoose from "mongoose";

export const connectDB = async () => {
    try {
       await mongoose.connect("mongodb+srv://jdgm1038:jose123@cluster0.903bhsv.mongodb.net/"); 
       console.log(">> DB Connect "); 
    } catch (error) {
        console.log(error)
    }
};