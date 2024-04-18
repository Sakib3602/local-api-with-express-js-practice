const express = require('express');
const app = express()
var cors = require('cors')

const phone = require("./phones.json")

const port = 7000
app.use(cors())
app.get("/", (req , res)=>{
    res.send("Hello world")
})

app.get("/phones" , (req , res)=>{

    res.send(phone)

})

app.get("/phones/:id",(req,res)=>{
    const id = parseInt( req.params.id)

    const xPhone = phone.find(ph => ph.id === id) || {};

    res.send(xPhone)


})

app.listen(port, ()=>{
    console.log("port from :",port)
})