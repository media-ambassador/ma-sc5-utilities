"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var BehaviorSubject_1 = require("rxjs/BehaviorSubject");
var _ = require("lodash");
var MaSc5RwdBreakpointsService = /** @class */ (function () {
    function MaSc5RwdBreakpointsService() {
        var _this = this;
        this.rwdBreakpoints = {
            default: { minSize: 99999, subject: new BehaviorSubject_1.BehaviorSubject(true) },
            desktopDevices: { minSize: 1540, subject: new BehaviorSubject_1.BehaviorSubject(true) },
            laptopDevices: { minSize: 1366, subject: new BehaviorSubject_1.BehaviorSubject(true) },
            laptopSmallDevices: { minSize: 1200, subject: new BehaviorSubject_1.BehaviorSubject(true) },
            tabletDevices: { minSize: 1024, subject: new BehaviorSubject_1.BehaviorSubject(true) },
            tabletSmallDevices: { minSize: 768, subject: new BehaviorSubject_1.BehaviorSubject(true) },
            phoneDevices: { minSize: 500, subject: new BehaviorSubject_1.BehaviorSubject(true) },
            phoneSmallDevices: { minSize: 320, subject: new BehaviorSubject_1.BehaviorSubject(true) }
        };
        this.handleWindowSize(window.innerWidth);
        window.addEventListener('resize', function (event) { return _this.handleWindowSize(event.target.innerWidth); }, false);
    }
    MaSc5RwdBreakpointsService.prototype.emitRwdBreakpoints = function (name, value) {
        this.rwdBreakpoints[name].subject.next(value);
    };
    MaSc5RwdBreakpointsService.prototype.handleWindowSize = function (size) {
        var _this = this;
        _.forOwn(this.rwdBreakpoints, function (breakpoint, key) {
            size > breakpoint.minSize
                ? _this.emitRwdBreakpoints(key, false)
                : _this.emitRwdBreakpoints(key, true);
        });
    };
    MaSc5RwdBreakpointsService.prototype.getRwdBreakpoint = function (name) {
        return this.rwdBreakpoints[name].subject.asObservable();
    };
    MaSc5RwdBreakpointsService.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    MaSc5RwdBreakpointsService.ctorParameters = function () { return []; };
    return MaSc5RwdBreakpointsService;
}());
exports.MaSc5RwdBreakpointsService = MaSc5RwdBreakpointsService;
//# sourceMappingURL=rwd-breakpoints.service.js.map