const Food = require('../models/Food')

const createFood = (async (req, res) => {
    try {
        const createdFood = await Food.create(req.body)
        res.status(201).json(createdFood)
    }
    catch (error) {
        console.log(error)
        res.status(500).json({ error: error.message })
    }

})


const allFood = (async (req, res) => {
    try {
        const allFoods = await Food.find()
        if (allFoods.length)
            res.status(200).json(allFoods)
        else
            res.sendStatus(204)
    }
    catch (error) {
        console.log(error)
        res.status(500).json({ error: error.message })
    }

})


const showFoodDetails = (async (req, res) => {
    try {
        const food = await Food.findById(req.params.id)
        if (food)
            res.status(200).json(food)
        else
            res.sendStatus(404)
    }
    catch (error) {
        console.log(error)
        res.status(500).json({ error: error.message })
    }
})




const deleteFood = (async (req, res) => {
    try {
        const food = await Food.findByIdAndDelete(req.params.id)
        if (food) {
            res.status(200).json(food)
        } else {
            res.sendStatus(404)
        }

    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})

const updatedFood = (async (req, res) => {
    try {
        const food = await food.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        )

        if (food) {
            res.status(200).json(food)
        } else {
            res.sendStatus(404)
        }

    } catch (error) {
        res.status(500).json({ error: error.message })
    }

})

module.exports = {
    createFood,
    allFood,
    showFoodDetails,
    deleteFood,
    updatedFood
}
