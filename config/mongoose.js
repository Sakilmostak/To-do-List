const mongoose = require('mongoose');

//connecting to local db
mongoose.connect('mongodb://localhost/todo_database');
const db = mongoose.connection;

// if there is error connecting to db
db.on('error',console.error.bind(console,"Error connecting to MongoDB"));

//if it works fine
db.once('open', function(){
    console.log('Connected to Database successfully : MongoDB');
});

module.exports= db;