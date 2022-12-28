import mongoose from "mongoose"
import dotenv from "dotenv"

dotenv.config()

const DATABASE_URL = process.env.DATABASE_URL

mongoose.connect(DATABASE_URL)

//connection messages

mongoose.connection
.on("open", () => console.log(`Connected to mongo DB`))
.on("close", () => console.log("Disconnected from Mongo"))
.on("error", (error) => console.log(error))

export default mongoose