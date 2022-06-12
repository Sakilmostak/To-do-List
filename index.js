//fetching all the libraries
const express = require('express');
const app = express();
const port = 3000;
const db = require('./config/mongoose');
const bodyParser = require('body-parser');

//parsing the encoded data
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.urlencoded());

//setting up statics for style and adding js to the page
app.use(express.static('./assets'));

//setting up view engine as ejs
app.set('view engine','ejs');
app.set('views','./views');

//express router
app.use('/', require('./routes'));

//firing up the server
app.listen(port, function(err){
    if(err){
        console.log(`Error in running the server: ${err}`);
        return;
    }

    console.log(`Server is running fine on port : ${port}`);
})