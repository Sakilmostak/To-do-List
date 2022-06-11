const Home= require('../models/home');

module.exports.home = async function(req,res){

    try{
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
        console.log(req.body.date);
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
        let todo = await Home.findOne({_id: req.params.id});

        todo.check= !todo.check;
        todo.save();
        return res.redirect('back');
    }
    catch(err){
        console.log('Error',err);
    }

}

module.exports.destroy = async function(req,res){
    try{
        await Home.deleteMany({check : true});

        return res.redirect('back');
    }
    catch(err){
        console.log('Error',err);
    }

    
}