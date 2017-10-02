"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var main_service_1 = require("../main/main.service");
var GamePageComponent = (function () {
    function GamePageComponent(route, mainService) {
        this.route = route;
        this.mainService = mainService;
        this.navExpanded = false;
        this.newTask = {};
    }
    // scoredUser = <any>{};
    GamePageComponent.prototype.dismissNav = function () {
        this.navExpanded = false;
    };
    GamePageComponent.prototype.toggleNav = function () {
        if (!this.navExpanded) {
            this.navExpanded = true;
        }
        else {
            this.navExpanded = false;
        }
    };
    GamePageComponent.prototype.ngOnInit = function () {
        var _this = this;
        //route to call all the information of current on going game
        this.route.params.forEach(function (param) {
            _this.mainService.getGame(param.id)
                .subscribe(function (response) {
                _this.oneGame = response.json();
                console.log(_this.oneGame);
            });
        });
    };
    GamePageComponent.prototype.addNewTask = function (newTask) {
        var _this = this;
        //call to service that create the task for the on going game
        console.log("creating new task");
        newTask.gameId = this.oneGame.id;
        this.mainService.addTask(newTask)
            .subscribe(function (response) {
            _this.addedTask = response.json();
            console.log(_this.addedTask);
            window.location.href = "/GamePage/" + newTask.gameId;
        });
    };
    GamePageComponent.prototype.deleteTask = function (deletedTask) {
        var _this = this;
        console.log(deletedTask);
        this.mainService.deleteTask(deletedTask)
            .subscribe(function (response) {
            var taskIndex = _this.oneGame.tasks.indexOf(deletedTask);
            _this.oneGame.tasks.splice(taskIndex, 1);
            window.location.href = "/GamePage/" + deletedTask.gameId;
        });
    };
    GamePageComponent.prototype.addScore = function (scoredUser, doneTask) {
        // scoredUser.userName = user.userName;
        scoredUser.score = scoredUser.score + doneTask.point;
        // scoredUser.image = user.image;
        // scoredUser.gameId = user.id;
        this.mainService.updateUser1(scoredUser)
            .subscribe(function (response) {
            console.log(response.json());
        });
        this.mainService.deleteTask(doneTask)
            .subscribe(function (response) {
            window.location.href = "/GamePage/" + doneTask.gameId;
        });
    };
    return GamePageComponent;
}());
GamePageComponent.decorators = [
    { type: core_1.Component, args: [{
                selector: 'app-game-page',
                templateUrl: './game-page.component.html',
                styleUrls: ['./game-page.component.css']
            },] },
];
/** @nocollapse */
GamePageComponent.ctorParameters = function () { return [
    { type: router_1.ActivatedRoute, },
    { type: main_service_1.MainService, },
]; };
exports.GamePageComponent = GamePageComponent;
//# sourceMappingURL=game-page.component.js.map