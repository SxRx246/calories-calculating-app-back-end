const FoodPerDay = require('../models/FoodPerDay');

const getToday = () => {
    const today = new Date();
    today.setHours(0, 0, 0, 0); // midnight
    return today;
};
const addFoodForDay = async (req, res) => {
    const { userId, foodId, quantity } = req.body;

    if (!userId || !foodId || !quantity) {
        return res.status(400).json({ message: "Missing required fields." });
    }

    try {
        let foodPerDay = await FoodPerDay.findOne({ userId, date: getToday() }).populate('foods.food');

        if (!foodPerDay) {
            foodPerDay = new FoodPerDay({ userId, date: getToday() });
        }

        foodPerDay.foods.push({ food: foodId, quantity });
        await foodPerDay.calculateTotalCalories();
        await foodPerDay.save();
        console.log('Saved foodPerDay:', JSON.stringify(foodPerDay, null, 2))

        res.status(201).json({ message: 'Food added successfully!', foodPerDay });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
};

const getFoodForDay = async (req, res) => {
    const userId = req.params.userId;

    try {
        const foodPerDay = await FoodPerDay.findOne({ userId, date: getToday() })
            .populate('foods.food');
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
        const foodPerDay = await FoodPerDay.findOne({ userId, date: getToday() });

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
    const foodId = req.params.foodId;

    if (!foodId) {
        return res.status(400).json({ message: "Missing foodId to delete." });
    }

    try {
        const foodPerDay = await FoodPerDay.findOne({ userId, date: getToday() });

        if (!foodPerDay) {
            return res.status(404).json({ message: 'No food log found for this day.' });
        }

        foodPerDay.foods = foodPerDay.foods.filter(f => f.food.toString() !== foodId);

        await foodPerDay.calculateTotalCalories();
        await foodPerDay.save();

        res.status(200).json({ message: 'Food deleted successfully!' });
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