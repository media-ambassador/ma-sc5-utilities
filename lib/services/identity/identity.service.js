"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ReplaySubject_1 = require("rxjs/ReplaySubject");
var ngx_cookie_service_1 = require("ngx-cookie-service");
var common_model_1 = require("../../common/common.model");
var MaSc5IdentityService = /** @class */ (function () {
    function MaSc5IdentityService(config, cookieService) {
        this.config = config;
        this.cookieService = cookieService;
        this.identitySubject = new ReplaySubject_1.ReplaySubject(1);
        if (!this.config) {
            throw new Error('Config not set');
        }
        this.identity = this.cookieService.check(config.identityKeyName)
            ? JSON.parse(this.cookieService.get(config.identityKeyName))
            : null;
    }
    MaSc5IdentityService.prototype.init = function (identity) {
        if (identity === void 0) { identity = null; }
        this.identity = !!identity ? identity : this.identity;
        this.identitySubject.next(this.identity);
    };
    MaSc5IdentityService.prototype.watchIdentity = function () {
        return this.identitySubject.asObservable();
    };
    MaSc5IdentityService.prototype.getIdentity = function () {
        return this.identity;
    };
    MaSc5IdentityService.prototype.clearIdentity = function () {
        this.identity = null;
        this.identitySubject.next(this.identity);
    };
    MaSc5IdentityService.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    MaSc5IdentityService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: core_1.Inject, args: [common_model_1.MaSc5EnvironmentConfigName,] },] },
        { type: ngx_cookie_service_1.CookieService, },
    ]; };
    return MaSc5IdentityService;
}());
exports.MaSc5IdentityService = MaSc5IdentityService;
//# sourceMappingURL=identity.service.js.map