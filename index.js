const express = require("express")
const mongoose = require("mongoose")
const Product = require("./models/product.model")

const app = express()

app.use(express.json())

app.get("/", (req, res) => {
    res.send("This is from node API")
})

// Get all products API
app.get("/api/products", async (req, res) => {
    try {
        const products = await Product.find({})
        res.status(200).json(products)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

// Get product by id API
app.get("/api/product/:id", async (req, res) => {
    try {
        const { id } = req.params
        const product = await Product.findById(id)
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

// Post product API
app.post("/api/products", async (req, res) => {
    try {
       const product = await Product.create(req.body)
       res.status(200).json(product)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

// Put product API
app.put("/api/product/:id", async (req, res) => {
    try {
        const { id } = req.params
        const product = await Product.findByIdAndUpdate(id, req.body)

        // if product doesn't exist
        if (!product) {
            return res.status(404).json({ message: "Product not found !" })
        }

        // if product does exist
        const updatedProduct = await Product.findById(id)
        res.status(200).json(updatedProduct)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

// Delete product API
app.delete("/api/product/:id", async (req, res) => {
    try {
        const { id } = req.params
        const product = await Product.findByIdAndDelete(id)

        // if product doesn't exist
        if (!product) {
            return res.status(404).json({ message: "Product not found !" })
        }

        // if product does exist
        res.status(200).json({ message: "Product deleted successfully !" })
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