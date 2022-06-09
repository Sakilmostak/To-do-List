const Home= require('../models/home');

module.exports.home = function(req,res){

    Home.find({},function(err, todos){
        if(err){
            console.log('Error in fetching todos from db');
            return;
        }

        return res.render('home',{
            title: "To-Do List",
            todos: todos
        });
    });

    
}

module.exports.create = function(req,res){
    Home.create(
        {
            content: req.body.content,
            category: req.body.category,
            date: req.body.date,
            check: true
        },
        function(err,todo){
            if(err){
                console.log('error in creating task',err);
            }

            console.log('*******',todo);
            return res.redirect('back');
        }
    );
}
