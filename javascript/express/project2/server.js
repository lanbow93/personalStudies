const express = require("express");
const app = express();

app.set("view engine", "ejs")

app.get("/", (request, response) => {
    console.log("Here")
    response.render("index", {text12345: "World"})
})

const userRouter = require("./routes/users")
app.use("/users", userRouter)



app.listen(3000)