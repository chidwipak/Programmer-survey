Professional Programmer Survey
A full stack web application built using Node.js, Express, MongoDB, and EJS with MVC architecture.
It collects survey responses from professional programmers including experience, tools used,
open-source contributions, and study habits. Data is stored in MongoDB with auto-generated
timestamps.

Features

- Auto-generated timestamp for each entry
- Responsive UI using EJS templating
- Follows MVC architecture (Model, View, Controller)
- Stores responses in MongoDB
- Clean structure for easy maintenance
  
Survey Fields

- Timestamp (auto)
- Name
- Gender (Male / Female / Transgender)
- Age
- Years of coding experience
- Industry
- Open source contributions
- Version control systems used
- Company tools (OS, Cloud, DB, Language)
- Daily study hours

Tech Stack
- Frontend: HTML, CSS, EJS
- Backend: Node.js, Express.js
- Database: MongoDB
- Architecture: MVC
  
Getting Started

1. Clone the repo
git clone https://github.com/yourusername/professional-programmer-survey.git
cd professional-programmer-survey
2. Install dependencies
npm install
3. Create a .env file
MONGO_URI=your_mongodb_connection_string
PORT=3000
4. Run the app
npm start
App runs at http://localhost:3000

Acknowledgement
Developed as a full stack project to explore professional developer trends and practice MVC-based
web architecture.
