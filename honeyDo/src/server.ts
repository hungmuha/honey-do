import 'reflect-metadata';
import 'zone.js/dist/zone-node';
import { platformServer, renderModuleFactory } from '@angular/platform-server';
import { enableProdMode } from '@angular/core';
import { AppServerModuleNgFactory } from '../dist/ngfactory/src/app/app.server.module.ngfactory';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import { readFileSync } from 'fs';
import { join } from 'path';
import * as cookieParser from 'cookie-parser';
import * as Auth0Strategy   from 'passport-auth0';
import {session} from 'express-session';
import * as passport from 'passport';

import { router as honeyRoutes } from './config/index';

const PORT = 3000;

enableProdMode();

const app = express();

const strategy = new Auth0Strategy(
  {
    domain: 'hungmuha.auth0.com',
    clientID: 'g0rKxl9LVbeGU6dCV9x610WeAAe7l0S9',
    clientSecret: 'lJEl6SsqITOZ3zZQE90n25C5qkH0WjbMHzcdSv_r3W1yssfktxbNhqRz3H_jCmI2',
    callbackURL: 'http://localhost:3000/callback'
  },
  function(accessToken, refreshToken, extraParams, profile, done) {
    // accessToken is the token to call Auth0 API (not needed in the most cases)
    // extraParams.id_token has the JSON Web Token
    // profile has all the information from the user
    return done(null, profile);
  }
);

passport.use(strategy);

passport.serializeUser(function(user, done) {
  done(null, user);
});
passport.deserializeUser(function(user, done) {
  done(null, user);
});

app.use(passport.initialize());
app.use(passport.session());

app.use(bodyParser.json());

app.use(cookieParser());
app.use(honeyRoutes);

let template = readFileSync(join(__dirname, '..', 'dist', 'index.html')).toString();

app.engine('html', (_, options, callback) => {
  console.log(options);
  const opts = { document: template, url: options.req.url};

  renderModuleFactory(AppServerModuleNgFactory, opts)
    .then(html => callback(null, html));
});

app.set('view engine','html');
app.set('views','src')

app.get('*.*', express.static(join(__dirname, '..', 'dist')));

app.get('*', (req, res) => {
  res.render('index', { req });
});

app.listen(process.env.PORT || PORT, function () {
  console.log('Express server is running on http://localhost:3000/');
});