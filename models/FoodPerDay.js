// models/FoodPerDay.js
const { Schema, model } = require('mongoose');
const Food = require('./Food'); // Adjust the path as necessary

const foodItemSchema = new Schema({
    foodId: { type: Schema.Types.ObjectId, ref: 'Food', required: true }, // Reference to Food model
    quantity: { type: Number, required: true }, // Quantity of the food item consumed
});

const foodPerDaySchema = new Schema({
    date: {
        type: Date,
        required: true,
        default: Date.now,
    },
    foods: [foodItemSchema], // Array of food items for the day
    totalCalories: {
        type: Number,
        default: 0,
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    }, // Reference to the user
});

// Method to calculate total calories based on added foods
foodPerDaySchema.methods.calculateTotalCalories = async function() {
    this.totalCalories = 0;

    for (const item of this.foods) {
        const food = await Food.findById(item.foodId);
        if (food) {
            this.totalCalories += food.calories * item.quantity; // Calculate based on quantity
        }
    }

    await this.save(); // Save the updated total calories
};

const FoodPerDay = model('FoodPerDay', foodPerDaySchema);
module.exports = FoodPerDay;