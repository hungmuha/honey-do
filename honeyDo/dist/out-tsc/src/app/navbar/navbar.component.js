"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var main_service_1 = require("../main/main.service");
var NavbarComponent = (function () {
    function NavbarComponent(route, mainService) {
        this.route = route;
        this.mainService = mainService;
        this.currentUser = {};
    }
    NavbarComponent.prototype.ngOnInit = function () {
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
    return NavbarComponent;
}());
NavbarComponent.decorators = [
    { type: core_1.Component, args: [{
                selector: 'app-navbar',
                templateUrl: './navbar.component.html',
                styleUrls: ['./navbar.component.css']
            },] },
];
/** @nocollapse */
NavbarComponent.ctorParameters = function () { return [
    { type: router_1.ActivatedRoute, },
    { type: main_service_1.MainService, },
]; };
exports.NavbarComponent = NavbarComponent;
//# sourceMappingURL=navbar.component.js.map