const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('./assets'));

//setting up view engine as ejs
app.set('view engine','ejs');
app.set('views','./views');

//express router
app.use('/', require('./routes'));

app.listen(port, function(err){
    if(err){
        console.log(`Error in running the server: ${err}`);
        return;
    }

    console.log(`Server is running fine on port : ${port}`);
})