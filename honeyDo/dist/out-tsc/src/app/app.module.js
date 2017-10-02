"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var app_component_1 = require("./app.component");
var http_1 = require("@angular/http");
var forms_1 = require("@angular/forms");
var common_1 = require("@angular/common");
var landing_page_component_1 = require("./landing-page/landing-page.component");
var user_profile_component_1 = require("./user-profile/user-profile.component");
var main_service_1 = require("./main/main.service");
var game_page_component_1 = require("./game-page/game-page.component");
var appRoutes = [
    { path: '', component: landing_page_component_1.LandingPageComponent },
    { path: 'Profile/:id', component: user_profile_component_1.UserProfileComponent },
    { path: 'GamePage/:id', component: game_page_component_1.GamePageComponent }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule.decorators = [
    { type: core_1.NgModule, args: [{
                declarations: [
                    app_component_1.AppComponent,
                    landing_page_component_1.LandingPageComponent,
                    user_profile_component_1.UserProfileComponent,
                    game_page_component_1.GamePageComponent
                ],
                imports: [
                    platform_browser_1.BrowserModule.withServerTransition({ appId: 'honey-do' }),
                    router_1.RouterModule.forRoot(appRoutes),
                    http_1.HttpModule,
                    forms_1.FormsModule,
                    common_1.CommonModule
                ],
                providers: [main_service_1.MainService],
                bootstrap: [app_component_1.AppComponent]
            },] },
];
/** @nocollapse */
AppModule.ctorParameters = function () { return []; };
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map