// Main application file - Entry point for our Express application

// Import required modules
const express = require("express")
const mongoose = require("mongoose")
const path = require("path")
const dotenv = require("dotenv")

// Load environment variables
dotenv.config()

// Import routes
const indexRoutes = require("./routes/index")

// Initialize Express app
const app = express()

// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URI || "mongodb://localhost:27017/programmer-survey", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err))

// Set up middleware
app.use(express.urlencoded({ extended: true })) // Parse URL-encoded bodies
app.use(express.json()) // Parse JSON bodies
app.use(express.static(path.join(__dirname, "public"))) // Serve static files

// Set view engine to EJS
app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "views"))

// Use routes
app.use("/", indexRoutes)

// Start the server
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
