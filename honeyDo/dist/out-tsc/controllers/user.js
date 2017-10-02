"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var models_1 = require("../models");
var User = models_1.db.models.User;
function show(req, res) {
    User.findById(req.params.id)
        .then(function (user) {
        if (!user)
            res.send(res, "not found");
        else
            res.json(user);
    });
}
function showPartner(req, res) {
    console.log("hit this show Partner route");
    User.findOne({ where: { userName: req.params.name } })
        .then(function (user) {
        if (!user)
            res.send(res, "not found");
        else
            res.json(user);
    });
}
function userUpdate(req, res) {
    console.log("hit this user1 update route");
    User.findById(req.params.id)
        .then(function (user) {
        if (!user)
            res.send(res, "not found");
        else
            return user.updateAttributes(req.body);
    })
        .then(function (user) {
        res.json(user);
    });
}
var userController = {};
exports.userController = userController;
userController.show = show;
userController.showPartner = showPartner;
userController.userUpdate = userUpdate;
//# sourceMappingURL=user.js.map