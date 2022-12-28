import express from "express";
import Cheese from "../models/cheese.js";

const router = express.Router();

const catcher = (response) => (error) => response.status(400).json({error})

// "/cheese" - index route

router.get("/", async (request, response) => {
    const cheeses = await Cheese.find({}).catch(catcher(response))
    response.json(cheeses)

})

// "/cheese/:id" - Show route

router.get("/:id", async (request, response) => {
    const cheese = await Cheese.findById(request.params.id).catch(catcher(response))
    response.json(cheese)

})

// "/cheese" - Create route

router.post("/", async (request, response) => {
    const cheese = await Cheese.create(request.body).catch(catcher(response))
    response.json(cheese)
})

// "/cheese/:id" - Update route

router.put("/:id", async (request, response) => {
    const cheese = await Cheese.findByIdAndUpdate(request.params.id, request.body).catch(catcher(response))
    response.json(cheese)
})

// "/cheese/:id" - Delete route

router.delete("/:id", async (request, response) => {
    const cheese = await Cheese.findByIdAndRemove(request.params.id).catch(catcher(response))
    response.json(cheese)
})

export default router