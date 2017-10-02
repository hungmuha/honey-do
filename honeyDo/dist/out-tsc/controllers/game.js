"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var models_1 = require("../models");
var Game = models_1.db.models.Game;
var User = models_1.db.models.User;
var Task = models_1.db.models.Task;
function create(req, res) {
    console.log("this is the create game controller: " + req.body);
    Game.create(req.body).then(function (game) {
        if (!game)
            res.send(res, "not saved");
        else
            res.json(game);
    })
        .catch(function (err) {
        // print the error details
        console.log(err);
    });
}
function show(req, res) {
    console.log("this is the get route to get all information of the game");
    Game.findById(req.params.id, { include: [Task, User] })
        .then(function (game) {
        if (!game)
            res.send(res, "notfound");
        else
            res.json(game);
    });
}
var gameController = {};
exports.gameController = gameController;
gameController.create = create;
gameController.show = show;
//# sourceMappingURL=game.js.map