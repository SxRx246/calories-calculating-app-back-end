const FoodPerDay = require('../models/FoodPerDay');

const addFoodForDay = async (req, res) => {
    const { userId, foodId, quantity } = req.body;

    try {
        const getToday = () => {
            const today = new Date();
            today.setHours(0, 0, 0, 0); // midnight
            return today;
        };
        let foodPerDay = await FoodPerDay.findOne({ userId, date: getToday() });

        if (!foodPerDay) {
            foodPerDay = new FoodPerDay({ userId, date: getToday() });
        }

        foodPerDay.foods.push({ foodId, quantity });
        await foodPerDay.calculateTotalCalories();
        await foodPerDay.save();

        res.status(201).json({ message: 'Food added successfully!', foodPerDay });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
};

const getFoodForDay = async (req, res) => {
    const userId = req.params.userId;

    try {
        const foodPerDay = await FoodPerDay.findOne({ userId, date: new Date().toDateString() });

        if (!foodPerDay) {
            return res.status(404).json({ message: 'No food log found for this day.' });
        }

        res.status(200).json(foodPerDay);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
};

const updateFoodForDay = async (req, res) => {
    const userId = req.params.userId;
    const { foods } = req.body;

    try {
        const foodPerDay = await FoodPerDay.findOne({ userId, date: new Date().toDateString() });

        if (!foodPerDay) {
            return res.status(404).json({ message: 'No food log found for this day.' });
        }

        foodPerDay.foods = foods;
        await foodPerDay.calculateTotalCalories();
        await foodPerDay.save();

        res.status(200).json({ message: 'Food log updated successfully!', foodPerDay });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
};

const deleteFoodForDay = async (req, res) => {
    const userId = req.params.userId;

    try {
        const foodPerDay = await FoodPerDay.findOneAndDelete({ userId, date: new Date().toDateString() });

        if (!foodPerDay) {
            return res.status(404).json({ message: 'No food log found for this day.' });
        }

        res.status(200).json({ message: 'Food log deleted successfully!' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    addFoodForDay,
    getFoodForDay,
    updateFoodForDay,
    deleteFoodForDay,
};