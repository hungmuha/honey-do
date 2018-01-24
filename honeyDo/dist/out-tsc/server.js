"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
require("zone.js/dist/zone-node");
var platform_server_1 = require("@angular/platform-server");
var core_1 = require("@angular/core");
var app_server_module_ngfactory_1 = require("./dist/ngfactory/src/app/app.server.module.ngfactory");
var express = require("express");
var bodyParser = require("body-parser");
var fs_1 = require("fs");
var path_1 = require("path");
var cookieParser = require("cookie-parser");
var Auth0Strategy = require("passport-auth0");
var passport = require("passport");
var index_1 = require("./config/index");
var PORT = 3000;
core_1.enableProdMode();
var app = express();
var strategy = new Auth0Strategy({
    domain: 'hungmuha.auth0.com',
    clientID: 'g0rKxl9LVbeGU6dCV9x610WeAAe7l0S9',
    clientSecret: 'lJEl6SsqITOZ3zZQE90n25C5qkH0WjbMHzcdSv_r3W1yssfktxbNhqRz3H_jCmI2',
    callbackURL: 'http://localhost:3000/callback'
    // callbackURL: 'https://stormy-castle-85460.herokuapp.com/callback'
}, function (accessToken, refreshToken, extraParams, profile, done) {
    // accessToken is the token to call Auth0 API (not needed in the most cases)
    // extraParams.id_token has the JSON Web Token
    // profile has all the information from the user
    return done(null, profile);
});
passport.use(strategy);
passport.serializeUser(function (user, done) {
    done(null, user);
});
passport.deserializeUser(function (user, done) {
    done(null, user);
});
app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.json());
app.use(cookieParser());
app.use(index_1.router);
var template = fs_1.readFileSync(path_1.join(__dirname, '.', 'dist', 'index.html')).toString();
app.engine('html', function (_, options, callback) {
    console.log(options);
    var opts = { document: template, url: options.req.url };
    platform_server_1.renderModuleFactory(app_server_module_ngfactory_1.AppServerModuleNgFactory, opts)
        .then(function (html) { return callback(null, html); });
});
app.set('view engine', 'html');
app.set('views', 'src');
app.get('*.*', express.static(path_1.join(__dirname, '.', 'dist')));
app.get('*', function (req, res) {
    res.render('index', { req: req });
});
app.listen(process.env.PORT || PORT, function () {
    console.log('Express server is running on http://localhost:3000/');
});
//# sourceMappingURL=server.js.map