const express = require('express');
const viewController = require('../controllers/viewController');
const authController = require('../controllers/authController');

const router  = express.Router();



router.get('/',authController.isLoggedIn,viewController.getOverview);
router.get('/tour/:slug',authController.protect,viewController.getTour);
router.get('/login',authController.isLoggedIn,viewController.getLogin);
router.get('/signup',authController.isLoggedIn,viewController.getSignup);
router.get('/me',authController.isLoggedIn,viewController.getAccount);


router.post('/submit-user-data',authController.isLoggedIn,viewController.updateUserData)

module.exports =router;