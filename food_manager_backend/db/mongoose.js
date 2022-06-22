const mongoose = require("mongoose");

const url = "mongodb://127.0.0.1:27017";

const db = "food_manager";

mongoose.connect(`${url}/${db}`, {
    useNewUrlParser: true,
});
