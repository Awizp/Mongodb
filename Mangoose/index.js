import express from "express"

import connectDb from "./db/connectDb.js"

const port = process.env.PORT || 4000
const DATA_URL = process.env.DATA_URL || "mongodb://127.0.0.1:27017/movies"

console.log(process.env.PORT)
console.log(process.env.DATA_URL) // It doesn't work for now

const app = express(DATA_URL)

connectDb(DATA_URL)


app.listen(port, () => console.log(`server running on ${port}`))