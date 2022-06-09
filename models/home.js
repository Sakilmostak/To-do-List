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
            type: Date,
            required: true
        },
        check: {
            type: Boolean
        }
    }
);

const Home= mongoose.model('Home',homeSchemna);

module.exports = Home;