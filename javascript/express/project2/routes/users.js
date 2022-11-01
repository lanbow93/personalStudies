const express = require("express");
const router = express.Router()

router.get("/", (request, response) => {
    response.send("User List")
})

router.get("/new", (request, response) => {
    response.send("User New Form")
})

router.post("/", (request, response) => {
    response.send("Create User")
})

router
.route("/:id")
.get((request, response) => {
    response.send(`Get User With ID ${request.params.id}`)
})
.put((request, response) => {
    response.send(`Update User With ID ${request.params.id}`)
})
.delete((request, response) => {
    request.params.id
    response.send(`Delete User With ID ${request.params.id}`)
})


module.exports = router
