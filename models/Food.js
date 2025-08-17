const {Schema , model} = require('mongoose')


const FoodSchema = new Schema ({
    name: {
        type: String,
        require: true
    },
    category: {
        type: String,
        require: true,
        enum:["Fruits", "vegetable" , "Restaurant Food" , "Branding Product" , "Nuts"]
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