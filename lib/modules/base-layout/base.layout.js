"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var ngx_cookie_service_1 = require("ngx-cookie-service");
var sc5_utils_1 = require("../../services/sc5-utils");
var MaSc5BaseLayout = /** @class */ (function () {
    function MaSc5BaseLayout(route, cookieService, sc5UtilsService) {
        this.route = route;
        this.cookieService = cookieService;
        this.sc5UtilsService = sc5UtilsService;
        this.menuItems = [{
                text: 'ma.sc5.mainMenu.homePage',
                routerLink: '/'
            }];
        this.pageTitle = '';
        this.config = {
            wheelPropagation: true
        };
    }
    MaSc5BaseLayout.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data.subscribe(function (data) {
            if (!data && !data.identity) {
                _this.sc5UtilsService.logoutUser();
            }
            _this.identity = data.identity;
        });
    };
    MaSc5BaseLayout.prototype.onViewActive = function (component) {
        var _this = this;
        component.getTitle().subscribe(function (title) { return _this.pageTitle = title; });
    };
    MaSc5BaseLayout.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'ma-sc5-base-layout',
                    template: "\n    <header>\n      <ma-sc5-main-header [channels]=\"identity.channels\"\n                          [services]=\"identity.services\"\n                          [userId]=\"identity.id\"\n                          [pageTitle]=\"pageTitle\"\n                          [defaultChannel]=\"identity.default_channel\">\n      </ma-sc5-main-header>\n\n      <ma-sc5-main-menu [menuItems]=\"menuItems\"></ma-sc5-main-menu>\n    </header>\n\n    <section>\n      <perfect-scrollbar [config]=\"config\">\n        <router-outlet (activate)=\"onViewActive($event)\"></router-outlet>\n      </perfect-scrollbar>\n    </section>\n\n    <footer>\n      <ma-sc5-main-footer></ma-sc5-main-footer>\n    </footer>\n  ",
                    styles: ["\n    /**\n     * Applies styles for users in high contrast mode. Note that this only applies\n     * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n     * attribute, however Chrome handles high contrast differently.\n     */\n    /* Theme for the ripple elements.*/\n    /* stylelint-disable material/no-prefixes */\n    /* stylelint-enable */\n    :host {\n      display: grid;\n      width: 100%;\n      height: 100vh;\n      grid-gap: 0;\n      grid-template-columns: 1fr;\n      grid-template-rows: 115px 1fr 50px;\n      grid-template-areas: \"main-header\" \"router-outlet\" \"main-footer\"; }\n      :host > header {\n        grid-area: main-header;\n        background: white;\n        box-shadow: 0px 0px 15px -1px rgba(117, 117, 117, 0.4); }\n      :host > section {\n        grid-area: router-outlet;\n        max-height: calc(100vh - (115px + 50px));\n        padding: 20px 10px; }\n        :host > section perfect-scrollbar {\n          max-height: calc(100vh - (115px + 50px + 40px));\n          background: white;\n          box-shadow: 0px 0px 15px -1px rgba(117, 117, 117, 0.4); }\n      :host > footer {\n        grid-area: main-footer;\n        background: white;\n        box-shadow: 0px 0px 15px -1px rgba(117, 117, 117, 0.4); }\n  "]
                },] },
    ];
    /** @nocollapse */
    MaSc5BaseLayout.ctorParameters = function () { return [
        { type: router_1.ActivatedRoute, },
        { type: ngx_cookie_service_1.CookieService, },
        { type: sc5_utils_1.MaSc5UtilsService, },
    ]; };
    return MaSc5BaseLayout;
}());
exports.MaSc5BaseLayout = MaSc5BaseLayout;
//# sourceMappingURL=base.layout.js.map