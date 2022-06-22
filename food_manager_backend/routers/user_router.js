const express = require("express");
const router = new express.Router();
const Restaurant = require("../model/restaurant");

router.get("/", async (req, res) => {
    // const data = await Restaurant.find({});
    console.log("wwe");
    res.send("data");
});

router.get("/api/listing", async (req, res) => {
    try {
        const data = await Restaurant.find();
        const parsed = data;
        res.send(parsed);
    } catch (err) {
        console.log(err.message);
    }
});
router.get("/api/restaurant", async (req, res) => {
    try {
        const data = await Restaurant.find({});
        const parsed = data.map((op) => op["restaurant"]);
        res.send(parsed);
    } catch (err) {
        console.log(err.message);
    }
});

module.exports = router;
