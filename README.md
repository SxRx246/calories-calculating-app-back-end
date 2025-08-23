# Sip and Skip - Calorie Tracker Backend

## Description

**Sip and Skip** is a calorie tracking application that helps users calculate their required daily calorie intake and log the food they consume each day.

This backend is built with **Node.js**, **Express**, and **MongoDB**. It allows users to:

- Register and log in
- Input health information like **age**, **gender**, **height**, **weight**, and **activity level**
- Automatically calculate required daily calories (TDEE) based on health info
- Add, view, update, or delete foods
- Log daily food entries and calculate total calories per day
- Upload images for custom foods

This backend is designed to support both basic functionality and future expansion. While it currently lacks advanced security and search features, it provides a solid foundation for scalable health tracking.

## Getting started

+ Link to [Frontend App (Sip and Skip)](https://github.com/SxRx246/calories-calculating-app-front-end/)

## Attributions

#### Node.js & Express

+ [Express Documentation](https://expressjs.com/)  
+ [Multer for File Uploads](https://github.com/expressjs/multer)  
+ [Morgan Middleware](https://github.com/expressjs/morgan)  
+ [Cors Middleware](https://www.npmjs.com/package/cors)

#### MongoDB & Mongoose

+ [Mongoose ODM](https://www.mongodb.com/)

#### Authentication

+ [jsonwebtoken (JWT)](https://github.com/auth0/node-jsonwebtoken)  
+ [bcrypt for password hashing](https://github.com/kelektiv/node.bcrypt.js)

#### Environment & Config

+ [dotenv for environment variables](https://www.npmjs.com/package/dotenv)


## Technologies Used

**Node.js & Express**  
Power the backend API. Modular controllers and secure routing allow for CRUD operations on users, foods, and daily logs.

**MongoDB & Mongoose**  
Used for schema-based modeling of users, food entries, health data, and food logs.

**JWT & bcrypt**  
Used to handle authentication. Currently basic and needs improvement for production environments.

**Multer**  
Enables image uploads for custom food items.

**dotenv**  
Separates environment variables and secrets from the codebase.

**Calorie Calculation**  
The backend uses user health data to calculate **Total Daily Energy Expenditure (TDEE)** using:
- Age  
- Gender  
- Height & Weight (with units)  
- Activity level

This helps users understand how many calories they should consume per day.

## Next steps

We plan to enhance the backend with:

+ **Better Security**
  - Use `process.env.SECRET` consistently
  - Token refresh logic and expiration
  - Input sanitization and validation
  - HTTPS and secure cookie handling

+ **Search Bar**
  - Add ability to search for food items using keywords

+ **Third-Party API Integration**
  - Integrate external nutrition APIs like:
    - Nutritionix
    - Open Food Facts
  - Allow barcode scanning and auto-fetch of calorie/nutrient data

+ **Calorie Comparison**
  - Show user progress vs. their required calorie goal
  - Warn when exceeding limits
  - Add charts or summaries

> While the current version of **Sip and Skip** is fully functional, there is a lot of room for exciting improvements that will make the app more secure, smarter, and easier to use.
