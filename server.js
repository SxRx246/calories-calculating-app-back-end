const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require("path");
const cors = require('cors')



const foodRoutes = require('./routes/foodRoutes') 
const userInfoRoutes = require('./routes/userInfoRoutes')
const authRoutes = require('./routes/authRoutes')

mongoose.connect(process.env.MONGODB_URI);

mongoose.connection.on('connected', () => {
  console.log(`Connected to MongoDB ${mongoose.connection.name}.`);
});

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// Routes go here
app.use('/auth', authRoutes)
app.use("/foods" , foodRoutes)
app.use("/user-info" , userInfoRoutes)
app.use("/uploads", express.static(path.join(__dirname, "uploads")))

app.listen(3000, () => {
  console.log('The express app is ready!');
});
