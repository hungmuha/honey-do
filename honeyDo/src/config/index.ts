import * as express from 'express';
import * as passport from 'passport';
import { db } from '../models';
import { userController } from '../controllers/user';
import { gameController } from '../controllers/game';
import { taskController } from '../controllers/task';
var userid;
var User = db.models.User;
var router = express.Router();
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
          userName: name
        },
        defaults: {
          image: pic,          
          score: 0

        }
      }).spread((user)=>{
          console.log(user);
          userid = user.dataValues.id;
          console.log('this is the id of the user now: ' + userid);
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
router.get('/game/:id',gameController.show);
router.post('/game',gameController.create);
router.post('/task',taskController.create);
router.put('/user/:id',userController.userUpdate);
router.delete('/task/:id',taskController.destroy);

export {router};