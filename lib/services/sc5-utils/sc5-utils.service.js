"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var core_2 = require("@ngx-translate/core");
var angular2_notifications_1 = require("angular2-notifications");
var material_1 = require("@angular/material");
var platform_browser_1 = require("@angular/platform-browser");
var Sc5UtilsService = /** @class */ (function () {
    function Sc5UtilsService(translate, notificationsService, iconRegistry, sanitizer) {
        this.translate = translate;
        this.notificationsService = notificationsService;
        this.iconRegistry = iconRegistry;
        this.sanitizer = sanitizer;
        this.modulePrefix = 'app';
    }
    Sc5UtilsService.prototype.redirectToModule = function (moduleName, timeout) {
        var _this = this;
        if (timeout === void 0) { timeout = 0; }
        setTimeout(function () {
            window.location.href = window.location.protocol + "//" + window.location.host + "/" + moduleName + "/" + _this.modulePrefix + "/";
        }, timeout);
    };
    Sc5UtilsService.prototype.getModuleUrl = function (moduleName) {
        return window.location.protocol + "//" + window.location.host + "/" + moduleName + "/" + this.modulePrefix + "/";
    };
    Sc5UtilsService.prototype.registerIcon = function (name, filePath) {
        this.iconRegistry.addSvgIcon(name, this.sanitizer.bypassSecurityTrustResourceUrl(filePath));
    };
    Sc5UtilsService.prototype.logoutUser = function (timeout) {
        if (timeout === void 0) { timeout = 1500; }
        //TODO: Remove cookie
        this.notificationsService.success(this.translate.instant("common.logout.user.notification"));
        this.redirectToModule('authentication', timeout);
    };
    Sc5UtilsService.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    Sc5UtilsService.ctorParameters = function () { return [
        { type: core_2.TranslateService, },
        { type: angular2_notifications_1.NotificationsService, },
        { type: material_1.MatIconRegistry, },
        { type: platform_browser_1.DomSanitizer, },
    ]; };
    return Sc5UtilsService;
}());
exports.Sc5UtilsService = Sc5UtilsService;
//# sourceMappingURL=sc5-utils.service.js.map