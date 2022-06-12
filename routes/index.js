//fetching the libraries
const express = require('express');
const router = express.Router();

//fetching the controller
const homeController = require('../controllers/home_controller');

//setting the routes
router.get('/',homeController.home);

router.post('/create', homeController.create);
router.post('/check/:id', homeController.check);
router.post('/destroy', homeController.destroy);

//making it public
module.exports= router;