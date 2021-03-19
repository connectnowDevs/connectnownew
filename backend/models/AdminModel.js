const mongoose = require("mongoose")

const AdminSchema = new mongoose.Schema({
    email:{
        type:String
    },
    password:{
        type:String
    },
    firstName:{
        type:String
    },
    lastName:{
        type:String
    },
    userName:{
        type:String
    }
})

const AdminModel = mongoose.model("admin", AdminSchema)

module.exports = AdminModel