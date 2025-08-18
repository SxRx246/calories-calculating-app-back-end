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
mongoose.connect(process.env.MONGODB_URI);
// mongoose.connect(process.env.MONGODB_URI2);

mongoose.connection.on('connected', () => {
  console.log(`Connected to MongoDB ${mongoose.connection.name}.`);
});

app.use(express.json());
app.use(morgan('dev'));
app.use(cors({origin: 'http://localhost:5173'}))


// Routes go here
app.use("/foods" , foodRoutes)
app.use("/userInfo" , userInfoRoutes)
app.use("/uploads", express.static(path.join(__dirname, "uploads")))

app.listen(3000, () => {
  console.log('The express app is ready!');
});