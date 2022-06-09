const Express = require('express');
const app = Express();
const port = 3000;

//express router
app.use('/', require('./routes'));

app.listen(port, function(err){
    if(err){
        console.log(`Error in running the server: ${err}`);
        return;
    }

    console.log(`Server is running fine on port : ${port}`);
})