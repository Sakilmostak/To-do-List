const mongoose = require('mongoose');

const homeSchemna = new mongoose.Schema(
    {
        content: {
            type: String,
            required: true
        },
        category: {
            type: String,
            required: true
        },
        date: {
            type: String,
            required: true
        },
        check: {
            type: Boolean,
            default: false,
            required: true
        }
    }
);

const Home= mongoose.model('Home',homeSchemna);

module.exports = Home;