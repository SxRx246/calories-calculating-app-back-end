const {Schema , model} = require('mongoose')


const FoodSchema = new Schema ({
    name: {
        type: String,
        require: true
    },
    category: {
        type: String,
        require: true,
         enum: [
        "Fruits",
        "Vegetables",
        "Grains & Cereals",
        "Legumes & Beans",
        "Nuts & Seeds",
        "Dairy & Eggs",
        "Meat & Poultry",
        "Fish & Seafood",
        "Oils & Fats",
        "Snacks & Sweets",
        "Beverages",
        "Soups & Sauces",
        "Fast Food / Restaurant Food",
        "Branded Products"
      ]
    },
    serving_qty: {
        type: Number,
        require: true
    },
    serving_size : {
        type: Number,
        require: true
    }
    ,
    calories:{
        type: Number,
        require: true
    },
    picture:{
        type: String
    }

})

const Food = model('Food' , FoodSchema)

module.exports = Food