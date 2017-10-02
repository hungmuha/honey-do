"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
// import 'rxjs/add/operator/map';
var MainService = (function () {
    function MainService(http) {
        this.http = http;
        this.baseUrl = 'http://localhost:3000';
    }
    MainService.prototype.getUserProfile = function (userId) {
        console.log(userId);
        return this.http.get(this.baseUrl + "/user/" + userId);
    };
    MainService.prototype.searchForPartner = function (name) {
        console.log("this is the parnert name " + name);
        return this.http.get(this.baseUrl + "/user2/" + name);
    };
    MainService.prototype.createNewGame = function (game) {
        console.log("this is the create new game route: " + game);
        return this.http.post(this.baseUrl + "/game", game);
    };
    MainService.prototype.updateUser1 = function (user1Update) {
        console.log("this is the update User1 route");
        return this.http.put(this.baseUrl + "/user/" + user1Update.id, user1Update);
    };
    MainService.prototype.updateUser2 = function (user2Update) {
        console.log("this is the update User2 route");
        return this.http.put(this.baseUrl + "/user/" + user2Update.id, user2Update);
    };
    MainService.prototype.getGame = function (gameId) {
        console.log("this is the route to get game with Id: " + gameId);
        return this.http.get(this.baseUrl + "/game/" + gameId);
    };
    MainService.prototype.addTask = function (newTask) {
        console.log("this is the service to add a newTask: " + newTask);
        return this.http.post(this.baseUrl + "/task", newTask);
    };
    MainService.prototype.deleteTask = function (task) {
        console.log("this is the service to delete a task: " + task);
        return this.http.delete(this.baseUrl + "/task/" + task.id);
    };
    return MainService;
}());
MainService.decorators = [
    { type: core_1.Injectable },
];
/** @nocollapse */
MainService.ctorParameters = function () { return [
    { type: http_1.Http, },
]; };
exports.MainService = MainService;
//# sourceMappingURL=main.service.js.map