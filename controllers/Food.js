const Food = require('../models/Food')

async function createFood(req, res) {
    try {
        const createdFood = await Food.create(req.body)
        res.status(201).json(createdFood)
    }
    catch (error) {
        console.log(error)
        res.status(500).json({ error: error.message })
    }
}

module.exports = {
    createFood
}