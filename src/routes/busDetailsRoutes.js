const express = require("express");
const {
    getbusDetail,
    createbusDetail,
} = require("../controllers/busDetailsController");

console.log(getbusDetail)
const router = express.Router();

// GET request to get all subscribers
router.get("/busDetail", getbusDetail);

//POST request to add a subscriber
router.post("/busDetail", createbusDetail);


module.exports = router;
