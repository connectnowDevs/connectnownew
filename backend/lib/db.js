const mongoose = require("mongoose")

mongoose.connect(process.env.DB, {
    useUnifiedTopology: true,
    useNewUrlParser: true
})

const db = mongoose.connection

db.on("error", console.error.bind(console, "Mongo error"))

module.exports = db