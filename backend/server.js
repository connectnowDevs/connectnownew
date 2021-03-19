require('dotenv').config()
const express = require("express")
const app = express()
const PORT = process.env.PORT
const db = require("./lib/db")
const session = require("express-session")
const cors = require("cors")
const MongoDbStore = require("connect-mongodb-session")(session)
const bodyParser = require("body-parser")


const store = new MongoDbStore({
    uri:process.env.DB,
    collection:"sessions"
})


app.use(session({
    secret:"connectnow",
    saveUninitialized:false,
    resave:false,
    cookie:{maxAge:1750000}
}))

app.use(cors({
    origin:"localhost:3000",
    methods:"GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials:true
}))


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))


//Routers


//Middlewere of Routers


app.listen(PORT, function(err){
    if(err){
        console.log(err)
    }else{
        console.log(`Backend server is up on port ${PORT}`)
    }
})
