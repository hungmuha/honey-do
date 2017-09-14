import * as express from 'express';
import * as passport from 'passport';
import { db } from '../models';
var User = db.models.User;
var router = express.Router();
import { userController } from '../controllers/user';
var userid;

const env = {
  AUTH0_CLIENT_ID: 'g0rKxl9LVbeGU6dCV9x610WeAAe7l0S9',
  AUTH0_DOMAIN: 'hungmuha.auth0.com',
  AUTH0_CALLBACK_URL: 'http://localhost:3000/callback'
};


router.get('/login', passport.authenticate('auth0', {
  clientID: env.AUTH0_CLIENT_ID,
  domain: env.AUTH0_DOMAIN,
  redirectUri: env.AUTH0_CALLBACK_URL,
  responseType: 'code',
  audience: 'https://' + env.AUTH0_DOMAIN + '/userinfo',
  scope: 'openid profile'}),
  function(req, res) {
    res.redirect('/');
});

router.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/');
});

router.get('/callback',
  passport.authenticate('auth0', {
    failureRedirect: '/failure'
  }),
  function(req, res) {
  
    // console.log("hit this callback route")
    console.log(req.user._json.name);
    console.log(req.user);
    var name = req.user._json.name;
    console.log("this is the name of the current signing in "+name);
    var pic = req.user._json.picture;
    User.findOrCreate({
        where: {
          userName: name,
          image: pic
        },
        defaults: {
          score: 0
        }
      }).spread((user)=>{
          // console.log(user.dataValues.id);
          userid = user.dataValues.id;
          res.redirect(req.session.returnTo || '/Profile/' + userid);  
        });
  }
);

router.get('/failure', function(req, res) {
  var error = req.flash("error");
  var error_description = req.flash("error_description");
  req.logout();
  res.render('failure', {
    error: error[0],
    error_description: error_description[0],
  });
});

router.get('/user/:id',userController.show);
router.get('/user2/:name',userController.showPartner);

export {router};