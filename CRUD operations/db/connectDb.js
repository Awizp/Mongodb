import mongoose from "mongoose";

const connectDb = async (DB_URL) => {
    try {
        await mongoose.connect(DB_URL)
        console.log("DB connected...")
    } catch (error) {
        console.error(error)
    }
}

export default connectDb
