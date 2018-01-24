"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var passport = require("passport");
var models_1 = require("../models");
var user_1 = require("../controllers/user");
var game_1 = require("../controllers/game");
var task_1 = require("../controllers/task");
var userid;
var User = models_1.db.models.User;
var router = express.Router();
exports.router = router;
var env = {
    AUTH0_CLIENT_ID: 'g0rKxl9LVbeGU6dCV9x610WeAAe7l0S9',
    AUTH0_DOMAIN: 'hungmuha.auth0.com',
    AUTH0_CALLBACK_URL: 'http://localhost:3000/callback'
    // AUTH0_CALLBACK_URL: 'https://stormy-castle-85460.herokuapp.com/callback'
};
router.get('/login', passport.authenticate('auth0', {
    clientID: env.AUTH0_CLIENT_ID,
    domain: env.AUTH0_DOMAIN,
    redirectUri: env.AUTH0_CALLBACK_URL,
    responseType: 'code',
    audience: 'https://' + env.AUTH0_DOMAIN + '/userinfo',
    scope: 'openid profile'
}), function (req, res) {
    res.redirect('/');
});
router.get('/logout', function (req, res) {
    req.logout();
    res.redirect('/');
});
router.get('/callback', passport.authenticate('auth0', {
    failureRedirect: '/failure'
}), function (req, res) {
    // console.log("hit this callback route")
    console.log(req.user._json.name);
    console.log(req.user);
    var name = req.user._json.name;
    console.log("this is the name of the current signing in " + name);
    var pic = req.user._json.picture;
    User.findOrCreate({
        where: {
            userName: name
        },
        defaults: {
            image: pic,
        }
    }).spread(function (user) {
        // console.log(user);
        // console.log(created);
        // console.log(user.get({ 
        //   plain:true
        //  }))
        userid = user.dataValues.id;
        console.log('this is the id of the user now: ' + userid);
        res.redirect(req.session.returnTo || '/Profile/' + userid);
        // console.log(created);  
    });
});
router.get('/failure', function (req, res) {
    var error = req.flash("error");
    var error_description = req.flash("error_description");
    req.logout();
    res.render('failure', {
        error: error[0],
        error_description: error_description[0],
    });
});
router.get('/user/:id', user_1.userController.show);
router.get('/user2/:name', user_1.userController.showPartner);
router.get('/game/:id', game_1.gameController.show);
router.post('/game', game_1.gameController.create);
router.post('/task', task_1.taskController.create);
router.put('/user/:id', user_1.userController.userUpdate);
router.delete('/task/:id', task_1.taskController.destroy);
//# sourceMappingURL=index.js.map