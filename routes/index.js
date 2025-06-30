// Routes file - Defines all the routes for our application

const express = require("express")
const router = express.Router()
const Survey = require("../models/survey")

// GET route for the home page
router.get("/", (req, res) => {
  res.render("index", { title: "Professional Programmer Survey" })
})

// GET route for the survey form
router.get("/survey", (req, res) => {
  res.render("survey", { title: "Take Survey" })
})

// POST route to submit the survey
router.post("/submit-survey", async (req, res) => {
  try {
    // Create a new survey entry from the form data
    const newSurvey = new Survey({
      name: req.body.name,
      gender: req.body.gender,
      age: req.body.age,
      codingYears: req.body.codingYears,
      industry: req.body.industry,
      opensourceContribution: req.body.opensourceContribution === "yes",
      versionControl: req.body.versionControl,
      developmentTools: req.body.developmentTools,
      studyHours: req.body.studyHours,
    })

    // Save the survey to the database
    await newSurvey.save()

    // Redirect to the submissions page
    res.redirect("/submissions")
  } catch (error) {
    console.error("Error submitting survey:", error)
    res.status(500).render("survey", {
      title: "Take Survey",
      error: "An error occurred while submitting the survey. Please try again.",
    })
  }
})

// GET route to view all submissions
router.get("/submissions", async (req, res) => {
  try {
    // Fetch all survey submissions from the database
    const submissions = await Survey.find().sort({ timestamp: -1 })

    // Render the submissions page with the data
    res.render("submissions", {
      title: "Survey Submissions",
      submissions: submissions,
    })
  } catch (error) {
    console.error("Error fetching submissions:", error)
    res.status(500).render("submissions", {
      title: "Survey Submissions",
      error: "An error occurred while fetching the submissions.",
      submissions: [],
    })
  }
})

module.exports = router
