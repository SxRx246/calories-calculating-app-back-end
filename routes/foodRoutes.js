const express = require('express')
const router = express.Router()
const foodController = require('../controllers/Food')


router.put('/:id',foodController.updatedFood)
router.delete('/:id',foodController.deleteFood)

module.exports = router