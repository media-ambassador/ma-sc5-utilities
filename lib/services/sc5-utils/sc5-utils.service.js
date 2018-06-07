"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var core_2 = require("@ngx-translate/core");
var material_1 = require("@angular/material");
var platform_browser_1 = require("@angular/platform-browser");
var ngx_cookie_service_1 = require("ngx-cookie-service");
var MaSc5UtilsService = /** @class */ (function () {
    function MaSc5UtilsService(translate, iconRegistry, sanitizer, cookieService) {
        this.translate = translate;
        this.iconRegistry = iconRegistry;
        this.sanitizer = sanitizer;
        this.cookieService = cookieService;
        this.modulePrefix = 'app';
    }
    MaSc5UtilsService.prototype.redirectToModule = function (moduleName, timeout) {
        var _this = this;
        if (timeout === void 0) { timeout = 0; }
        setTimeout(function () {
            window.location.href = window.location.protocol + "//" + window.location.host + "/" + moduleName + "/" + _this.modulePrefix + "/";
        }, timeout);
    };
    MaSc5UtilsService.prototype.getModuleUrl = function (moduleName) {
        return window.location.protocol + "//" + window.location.host + "/" + moduleName + "/" + this.modulePrefix + "/";
    };
    MaSc5UtilsService.prototype.registerIcon = function (name, filePath) {
        this.iconRegistry.addSvgIcon(name, this.sanitizer.bypassSecurityTrustResourceUrl(filePath));
    };
    MaSc5UtilsService.prototype.logoutUser = function (timeout) {
        if (timeout === void 0) { timeout = 1500; }
        this.cookieService.deleteAll('/');
        this.redirectToModule('authentication', timeout);
    };
    MaSc5UtilsService.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    MaSc5UtilsService.ctorParameters = function () { return [
        { type: core_2.TranslateService, },
        { type: material_1.MatIconRegistry, },
        { type: platform_browser_1.DomSanitizer, },
        { type: ngx_cookie_service_1.CookieService, },
    ]; };
    return MaSc5UtilsService;
}());
exports.MaSc5UtilsService = MaSc5UtilsService;
//# sourceMappingURL=sc5-utils.service.js.map