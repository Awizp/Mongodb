import mongoose from "mongoose";

const movieSchema = mongoose.Schema({
    name: { type: String, required: true, trim: true },
    ratings: { type: Number, required: true, min: 1, max: 10 },
    money: {
        type: mongoose.Decimal128,
        required: true,
        validate: (v) => (v >= 10)
    },
    genre: { type: Array },
    isActive: { type: Boolean },
    comments: [{ value: { type: String }, published: { type: Date, default: Date.now } }]
})

// create model of document from our schema
const movieModel = mongoose.model("Movie", movieSchema)

// create or push new document in our database
const createDoc = async () => {
    try {
        const m1 = new movieModel({
            name: "Mission Impossible",
            ratings: 5,
            money: 400000,
            genre: ["action", "adventure", "spy"],
            isActive: true,
            comments: [{ value: "It was an Awesome movie" }]
        })

        const m2 = new movieModel({
            name: "Transformers",
            ratings: 3,
            money: 30000,
            genre: ["action", "sci-fi"],
            isActive: true,
            comments: [{ value: "It was an Good movie" }]
        })

        const m3 = new movieModel({
            name: "Godzilla vs Kong",
            ratings: 4,
            money: 40000,
            genre: ['action', "monsters", "rated"],
            isActive: true,
            comments: [{ value: "I am Godzilla Fan and I was happy about Godzila won the battle" }]
        })

        const result = await movieModel.insertMany([m1, m2, m3])
        console.log(result)
    } catch (error) {
        console.log(error)
    }
}

// get all documents from our db
const allDocs = async () => {
    try {
        const result = await movieModel.find()
        console.log(result)
    } catch (error) {
        console.error(error)
    }
}

// get single document by id
const singleDoc = async () => {
    try {
        const result = await movieModel.findById("65c9f9d041471f8250ba4337")
        console.log(result)
    } catch (error) {
        console.error(error)
    }
}

// get single document by field
const singleDocByField = async () => {
    try {
        const result = await movieModel.find({ name: "Transformers" })
        console.log(result)
    } catch (error) {
        console.error(error)
    }
}

// get only fields from our document
const getField = async () => {
    try {
        const fields = await movieModel.find({}, { name: 1 })

        //get name of the fields from an array
        fields.map((field) => {
            console.log(field.name)
        })
    } catch (error) {
        console.error(error)
    }
}

// updating our documents from our db
const updateOneDoc = async () => {
    try {
        const updateDoc = await movieModel.updateOne({ name: "Transformers 2" }, { name: "Transformers 3", ratings: 4 })
        console.log(updateDoc)
    } catch (error) {
        console.error(error)
    }
}

// updating many documents from our db
const updateManyDocs = async () => {
    try {
        const updateMany = await movieModel.updateMany({ ratings: 4 }, { ratings: 3 })
        console.log(updateMany)
    } catch (error) {
        console.error(error)
    }
}

// Deleting one document from our db
const deleteOneDoc = async () => {
    try {
        const deleteDoc = await movieModel.deleteOne({ name: "Transformers 3" })
        console.log(deleteDoc)
    } catch (error) {
        console.error(error)
    }
}

// Deleting many documents who has shared same values
const deleteMany = async () => {
    try {
        const deleteDocs = await movieModel.deleteMany({ ratings: 5 })
        console.log(deleteDocs)
    } catch (error) {
        console.error(error)
    }
}

export {
    createDoc,
    allDocs,
    singleDoc,
    singleDocByField,
    getField,
    updateOneDoc,
    updateManyDocs,
    deleteOneDoc,
    deleteMany
}
