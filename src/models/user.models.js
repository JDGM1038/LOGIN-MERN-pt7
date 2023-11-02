import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        unique: true,
        require: true,
        trim: true
    },
    password: {
        type: String,
        minlenght:[6, "Password should be at least 6 characters long"],
        require: true
    },
}, {
    timestamps: true
}); 

export default mongoose.model("user", userSchema); 