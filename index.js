const express = require("express")
const mongoose = require("mongoose")

const app = express()

app.get('/', (req, res) => {
    res.send('This is from node API')
})

app.listen(3000, () => {
    console.log('Server is running on port 3000')
})

mongoose.connect("mongodb+srv://manidavilay:JitsazaQDIR3c23c@backenddb.7yoh2.mongodb.net/Node-Express-Course?retryWrites=true&w=majority&appName=BackendDB")
.then(() => {
    console.log("Connected to database !")
}).catch(() => {
    console.log("Connection failed")
})