import express from "express"

import movieModel from "./models/movieSchema.js"

import connectDb from "./db/connectDb.js"

const app = express()

const PORT = process.env.PORT || 4000
const DB_URL = process.env.DB_URL || "mongodb://127.0.0.1:27017/movies"

connectDb(DB_URL)

app.listen(PORT, () => console.log(`server running on ${PORT}`))