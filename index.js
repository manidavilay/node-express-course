const express = require("express")
const mongoose = require("mongoose")
const Product = require("./models/product.model")

const app = express()

app.use(express.json())

app.get("/", (req, res) => {
    res.send("This is from node API")
})

// Post product route
app.post("/api/products", async (req, res) => {
    try {
       const product = await Product.create(req.body)
       res.status(200).json(product)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

app.listen(3000, () => {
    console.log("Server is running on port 3000")
})

mongoose.connect("mongodb+srv://manidavilay:JitsazaQDIR3c23c@backenddb.7yoh2.mongodb.net/Node-Express-Course?retryWrites=true&w=majority&appName=BackendDB")
.then(() => {
    console.log("Connected to database !")
}).catch(() => {
    console.log("Connection failed")
})