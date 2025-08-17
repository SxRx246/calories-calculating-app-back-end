const Food = require('../models/Food')

const deleteFood = (async(req, res) => {
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

const updatedFood = (async(req,res)=> {
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
    deleteFood,
    updatedFood
}
