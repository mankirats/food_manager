const mongoose = require("mongoose");
const mongodb = require("mongodb");

const restaurantSchema = new mongoose.Schema({
    restaurant: "string",
    foodItems: {
        foodName: "string",
        foodType: "string",
        calorie: "number",
        carbs: "number",
    },
});

const Restaurant = mongoose.model("Restaurant", restaurantSchema);

module.exports = Restaurant;
