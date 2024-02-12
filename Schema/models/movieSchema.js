import mongoose from "mongoose";

// Creating Schema or Blueprint of our document,
const movieSchema = mongoose.Schema({
    name: { type: String, required: true, trim: true },
    //required means it is requires to create db, trim is used to remove whitespace in name
    ratings: { type: Number, required: true, min: 1, max: 5 },
    money: {
        type: mongoose.Decimal128, // It is default method
        required: true,
        validate: (v) => (v >= 10)
    },
    genre: { type: Array },
    isActive: { type: Boolean },
    comments: [{ value: { type: String }, published: { type: Date, default: Date.now } }]
    // You can remind these types looks like in typescript
})

// Creating Model for our document,
const movieModel = mongoose.model("Movie", movieSchema) // It will create Movie collectio in our db

export default movieModel
