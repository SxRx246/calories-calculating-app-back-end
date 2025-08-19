// routes/foodPerDayRoutes.js
const express = require('express');
const router = express.Router();
const FoodPerDayController = require('../controllers/FoodPerDay'); // Adjust the path as necessary

// Route to add food for a specific day
router.post('/new', FoodPerDayController.addFoodForDay);

// Route to get food log for a specific day
router.get('/:userId', FoodPerDayController.getFoodForDay);

// Route to update food entries for a specific day
router.put('/:userId', FoodPerDayController.updateFoodForDay);

// Route to delete food entries for a specific day
router.delete('/:userId', FoodPerDayController.deleteFoodForDay);

module.exports = router;