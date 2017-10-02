"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var main_service_1 = require("../main/main.service");
var UserProfileComponent = (function () {
    function UserProfileComponent(route, mainService) {
        this.route = route;
        this.mainService = mainService;
        this.currentUser = {};
        this.game = {};
        this.newGame = {};
        this.user1Update = {};
        this.user2Update = {};
    }
    UserProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        //this call to service to get all the information of the user as the page pull up
        this.route.params.forEach(function (param) {
            _this.mainService.getUserProfile(param.id)
                .subscribe(function (response) {
                _this.currentUser = response.json();
                console.log(_this.currentUser);
            });
        });
    };
    //find the second player when user search the bar
    UserProfileComponent.prototype.findPartner = function (partnerName) {
        var _this = this;
        this.mainService.searchForPartner(partnerName)
            .subscribe(function (response) {
            _this.partnerInfo = response.json();
            console.log(_this.partnerInfo);
        });
    };
    //create the game when user click button
    UserProfileComponent.prototype.createGame = function (game) {
        var _this = this;
        console.log('saving a new game');
        this.mainService.createNewGame(game)
            .subscribe(function (response) {
            // console.log(response.json());
            _this.newGame = response.json();
            console.log(_this.newGame);
            _this.updateUsers();
            window.location.href = "/GamePage/" + _this.newGame.id;
        });
    };
    //update the user in the gameId field after the game was created 
    UserProfileComponent.prototype.updateUsers = function () {
        console.log(this.currentUser);
        console.log(this.newGame);
        this.user1Update.id = this.currentUser.id;
        this.user1Update.userName = this.currentUser.userName;
        this.user1Update.image = this.currentUser.image;
        this.user1Update.gameId = this.newGame.id;
        this.mainService.updateUser1(this.user1Update)
            .subscribe(function (response) {
            console.log(response.json());
        });
        this.user2Update.id = this.partnerInfo.id;
        this.user2Update.userName = this.partnerInfo.userName;
        this.user2Update.image = this.partnerInfo.image;
        this.user2Update.gameId = this.newGame.id;
        this.mainService.updateUser2(this.user2Update)
            .subscribe(function (response) {
            console.log(response.json());
        });
    };
    //user this button to resume the game that you have with your partner
    UserProfileComponent.prototype.resume = function () {
        console.log('this is the resume game route');
        window.location.href = "/GamePage/" + this.currentUser.gameId;
    };
    return UserProfileComponent;
}());
UserProfileComponent.decorators = [
    { type: core_1.Component, args: [{
                selector: 'app-user-profile',
                templateUrl: './user-profile.component.html',
                styleUrls: ['./user-profile.component.css']
            },] },
];
/** @nocollapse */
UserProfileComponent.ctorParameters = function () { return [
    { type: router_1.ActivatedRoute, },
    { type: main_service_1.MainService, },
]; };
exports.UserProfileComponent = UserProfileComponent;
//# sourceMappingURL=user-profile.component.js.map