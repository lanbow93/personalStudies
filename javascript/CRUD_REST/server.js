// ~~~~~~~~~~~~~ Dependencies ~~~~~~~~~~~~~ //
require("dotenv").config() // read the .env file |  process.env (process.env.PORT)
const express = require("express"); // Backend framwork
const morgan = require("morgan")
const sodaRouter = require("./controllers/soda")
 
// ~~~~~~~~~~~~~ Global Variables ~~~~~~~~~~~~~ //
const PORT = process.env.PORT || 3000

// ~~~~~~~~~~~~~ Create applicaton object ~~~~~~~~~~~~~ //
app = express();

// ~~~~~~~~~~~~~ Middleware ~~~~~~~~~~~~~ //
app.use(morgan("tiny"));
app.use("/soda", sodaRouter)
app.use("/static", express.static("public"))

// ~~~~~~~~~~~~~ Routes ~~~~~~~~~~~~~ //
app.get("/", (request, response) => {
    response.send("Server is working.")
})

// ~~~~~~~~~~~~~ Create Server Listener ~~~~~~~~~~~~~ //
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})