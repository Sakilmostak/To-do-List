//fetching the model for db
const Home= require('../models/home');

//setting action for the route
module.exports.home = async function(req,res){

    try{
        //find all the todo tasks
        let todos = await Home.find({});

        return res.render('home',{
            title: "To-Do List",
            todos: todos
        });
    }
    catch(err){
        console.log('Error',err);
    }
    
}

module.exports.create = async function(req,res){
    try{
        //save data in the db
        let todo = await Home.create(
            {
                content: req.body.content,
                category: req.body.category,
                date: req.body.date,
            }
        );
        return res.redirect('back');
    }
    catch(err){
        console.log('Error',err);
    }
}

module.exports.check = async function(req, res){
    try{
        //find the task with matching id
        let todo = await Home.findOne({_id: req.params.id});

        //toggling the checkbox
        todo.check= !todo.check;
        //saving the change
        todo.save();
        return res.redirect('back');
    }
    catch(err){
        console.log('Error',err);
    }

}

module.exports.destroy = async function(req,res){
    try{
        //find all the checked task and delete them
        await Home.deleteMany({check : true});

        return res.redirect('back');
    }
    catch(err){
        console.log('Error',err);
    }

    
}