const mongoose = require('mongoose')

const UserInfoSchema = mongoose.Schema({
//   _id: ,
//   userId: , 

  name: String,
  age: Number,

  gender: {
    type: String,
    enum: ["male", "female"], 
    required: true
  },

  height: {
    value: Number, 
    unit: {
      type: String,
      enum: ["cm", "ft"], 
      default: "cm"
    }
  },

  weight: {
    value: Number, 
    unit: {
      type: String,
      enum: ["kg", "lb"], 
      default: "kg"
    }
  },

  activityLevel: {
    type: String,
    enum: [
      "sedentary",        // little to no exercise
      "lightly_active",   // 1-3 days/week
      "moderately_active",// 3-5 days/week
      "very_active",      // 6-7 days/week
      "super_active"      // intense training
    ],
    required: true
  },

});

const UserInfo = mongoose.model('UserInfo', UserInfoSchema);

module.exports = UserInfo

