const Food = require('../models/Food')

const createFood = async (req, res) => {
    try {
        const foodData = {
            ...req.body,
            user_id: req.user.id
        }

        if (req.file) {
            foodData.picture = `/uploads/${req.file.filename}`
        }

        const food = await Food.create(foodData)
        res.status(201).json(food)
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: error.message })
    }
}


const allFood = (async (req, res) => {
    try {
        const allFoods = await Food.find().populate('user_id');
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
        const food = await Food.findById(req.params.id).populate('user_id');
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
        const updateData = { ...req.body }

        if (req.file) {
            updateData.picture = `/uploads/${req.file.filename}`
        }

        const food = await Food.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        )

        if (food.user_id.toString() !== req.user.id) {
            return res.status(403).json({ message: 'Access denied' });
        }

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
