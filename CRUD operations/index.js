import express from "express"

import connectDb from "./db/connectDb.js"
import { createDoc } from "./models/Movie.js"

const PORT = process.env.PORT || 4000
const DB_URL = process.env.DB_URL || "mongodb://127.0.0.1:27017/movies"

const app = express()

connectDb(DB_URL)

createDoc()

app.listen(PORT, () => console.log(`Server is running on ${PORT}`))