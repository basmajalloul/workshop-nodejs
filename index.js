const express = require("express")
const morgan = require("morgan")
const dotenv = require("dotenv")
const bodyparser = require("body-parser")
dotenv.config()
require("./db.js")

const app = express()
const user = require("./routes/user")

app.use(morgan("common"))
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:true}))
app.use("/api",user)

//localhost:5011/api/v1/user/register

app.listen(process.env.PORT,(err) => {
    if (err) [
        console.log(err)
    ]
    else {
        console.log("Listening to port 5001")
    }
})


const myFunc = (req,res) => {
    console.log("Request from server")
    res.status(200).send({message: "Hello from server"})
}

// Endpoint
app.get("/status",myFunc)
