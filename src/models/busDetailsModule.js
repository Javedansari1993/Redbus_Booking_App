const mongoose = require('mongoose');

const busDetailsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    rating: {
        type: String,
        required: true,
    },
    bustype: {
        type: String,
        required: true,
    },
    totalseats: {
        type: Number,
        required: true,
    },
    windowseats: {
        type: Number,
        required: true,
    },
    depttime: {
        type: String,
        required: true,
    },
    deptdate: {
        type: String,
        required: true,
    },
    duration: {
        type: String,
        required: true,
    },
    arrtime: {
        type: String,
        required: true,
    },
    arrdate: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    deplocation: {
        type: String,
        required: true,
    },
    arrlocation: {
        type: String,
        required: true,
    },
    deppoint: {
        type: String,
        required: true,
    },
    arrpoint: {
        type: String,
        required: true,
    },
})

module.exports = mongoose.model('busDetails',busDetailsSchema);