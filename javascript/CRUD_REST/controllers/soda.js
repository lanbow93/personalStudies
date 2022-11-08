const express = require("express");
const Soda = require("../models/soda")

const router =  express.Router()

router.get("/", (request, response) => {
    response.render("soda/index.ejs", {
        sodas: Soda.getAll()
    })
})

router.get("/:id", (request, response) => {
    response.render("soda/show.ejs", {
        soda: Soda.getOne(request.params.id)
    })
})

module.exports = router