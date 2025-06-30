// Survey model - Defines the schema for our survey data in MongoDB

const mongoose = require("mongoose")

// Create a schema for the survey data
const surveySchema = new mongoose.Schema({
  // Timestamp will be auto-generated when a new record is created
  timestamp: {
    type: Date,
    default: Date.now,
  },
  // Name of the programmer
  name: {
    type: String,
    required: true,
  },
  // Gender: Female/Male/Transgender
  gender: {
    type: String,
    enum: ["Female", "Male", "Transgender"],
    required: true,
  },
  // Age of the programmer
  age: {
    type: Number,
    required: true,
    min: 1,
  },
  // Years of coding experience
  codingYears: {
    type: Number,
    required: true,
    min: 0,
  },
  // Industry they work in
  industry: {
    type: String,
    required: true,
  },
  // Whether they contribute to open source projects
  opensourceContribution: {
    type: Boolean,
    required: true,
  },
  // Version control systems they use
  versionControl: {
    type: String,
    required: true,
  },
  // Development tools used by their company
  developmentTools: {
    type: String,
    required: true,
  },
  // Hours spent studying per day/week
  studyHours: {
    type: String,
    required: true,
  },
})

// Create and export the model
module.exports = mongoose.model("Survey", surveySchema)
