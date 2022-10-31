// import express
const express = require("express")

// create the application object
const app = express()

// register a middware step (in between step)
app.use((request, response, next) => {
    console.log(request.url)
    next()
})

// Setup a static file server
app.use("/static", express.static("static"))

// register a route (end step)
app.get("/", (request, response) => {
    response.send({message: "hello"})
})

// deliver a single static file
app.get("/staticfile", (request, response) => {
    response.sendFile("/home/lanbow93/personalStudies/javascript/express/project1/static/index.html")
})

// render an ejs template
app.get("/template", (request,response) => {
    response.render("first.ejs", {
        nums: [1,2,3,4],
        queries: Object.entries(request.query)
    })
})

// Sending JASON as a response to a request
app.get("/json/:myparam", (request, response) => {
    const obj = {
        method: request.method,
        url: request.url,
        headers: request.headers,
        params: request.params,
        query: request.query
    }

    response.json(obj)
})

app.listen(3000, () => {
    console.log("Server is listening on port 3000");
})