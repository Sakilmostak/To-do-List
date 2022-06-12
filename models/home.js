const mongoose = require('mongoose');

//setting up schema structure for the db
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

//creating the collection
const Home= mongoose.model('Home',homeSchemna);

//making it public
module.exports = Home;