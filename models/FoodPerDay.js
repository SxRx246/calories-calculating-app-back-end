const { Schema, model } = require('mongoose');
const Food = require('./Food');
const foodItemSchema = new Schema({
    food: {
        type: Schema.Types.ObjectId,
        ref: 'Food',
        required: true
    },
    quantity: {
        type: Number,
        required: true
    }
});

const foodPerDaySchema = new Schema({
    date: {
        type: Date,
        required: true,
        default: Date.now,
    },
    foods: [foodItemSchema], 
    totalCalories: {
        type: Number,
        default: 0,
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    }, 
});

foodPerDaySchema.methods.calculateTotalCalories = async function () {
    this.totalCalories = 0;

    for (const item of this.foods) {
        const food = await Food.findById(item.food);
        console.log('Calculating calories for food:', food);
        if (food) {
            this.totalCalories += food.calories * item.quantity; 
        }
    }
    console.log('Total calories calculated:', this.totalCalories);
    await this.save(); 
};

const FoodPerDay = model('FoodPerDay', foodPerDaySchema);
module.exports = FoodPerDay;