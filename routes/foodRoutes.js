const express = require('express')
const router = express.Router()
const multer = require("multer")
const path = require("path")

const FoodController = require('../controllers/Food')



const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/") 
  },
  filename: (req, file, cb) => {
    const uniqueName = Date.now() + "-" + file.originalname
    cb(null, uniqueName)
  }
})

const upload = multer({ storage })



router.post('/new' , upload.single("picture"), FoodController.createFood)
router.get('/' , FoodController.allFood)
router.get('/:id' , FoodController.showFoodDetails)
router.put('/:id', upload.single("picture"), FoodController.updatedFood)
router.delete('/:id',FoodController.deleteFood)


module.exports = router