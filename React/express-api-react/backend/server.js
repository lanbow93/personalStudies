import express from "express"
import morgan from "morgan"
import cors from "cors"
import dotenv from "dotenv"
import router from "./controllers/cheese.js"

// Get my env variables
dotenv.config()

// Create express application
const app = express();

// Register middleware
app.use(cors())
app.use(morgan("dev"))
app.use(express.json())

// Routes

app.get("/", (request, response) => {
    response.json({message: "It Works"})
})

app.use("/cheese", router)

// listener
const PORT = process.env.PORT ?? 4001
app.listen(PORT, (request, response) => {
    console.log(`Listening on port: ${PORT}`)
})