// This file contains client-side JavaScript for enhanced functionality
// Currently it's minimal as most functionality is handled server-side

document.addEventListener("DOMContentLoaded", () => {
  // Form validation
  const surveyForm = document.querySelector(".survey-form")

  if (surveyForm) {
    surveyForm.addEventListener("submit", (event) => {
      // Get age input
      const ageInput = document.getElementById("age")
      const age = Number.parseInt(ageInput.value)

      // Validate age (additional validation beyond HTML5)
      if (age < 1 || age > 120) {
        event.preventDefault()
        alert("Please enter a valid age between 1 and 120.")
        ageInput.focus()
        return
      }

      // Get coding years input
      const codingYearsInput = document.getElementById("codingYears")
      const codingYears = Number.parseInt(codingYearsInput.value)

      // Validate coding years
      if (codingYears < 0) {
        event.preventDefault()
        alert("Coding years cannot be negative.")
        codingYearsInput.focus()
        return
      }

      // Validate that coding years is not greater than age
      if (codingYears > age) {
        event.preventDefault()
        alert("Coding years cannot be greater than age.")
        codingYearsInput.focus()
        return
      }
    })
  }

  // Table row highlighting
  const tableRows = document.querySelectorAll(".submissions-table tbody tr")

  if (tableRows.length > 0) {
    tableRows.forEach((row) => {
      row.addEventListener("mouseenter", function () {
        this.style.backgroundColor = "#e3f2fd"
      })

      row.addEventListener("mouseleave", function () {
        this.style.backgroundColor = ""
      })
    })
  }
})
