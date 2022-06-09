const Home= require('../models/home');

module.exports.home = function(req,res){
    return res.render('home',{
        title: "To-Do List"
    });
}

module.exports.create = function(req,res){
    Home.create(
        {
            content: req.body.content,
            category: req.body.category,
            date: req.body.date,
            check: false
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
