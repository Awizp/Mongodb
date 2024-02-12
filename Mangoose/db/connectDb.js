import mongoose from "mongoose";

const connectDb = async (URL) => {
    try {
        await mongoose.connect(URL)
        console.log("DB connected")
    } catch (error) {
        console.error(error)
    }
}

export default connectDb
