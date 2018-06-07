"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var BehaviorSubject_1 = require("rxjs/BehaviorSubject");
var MaSc5ViewUpdateService = /** @class */ (function () {
    function MaSc5ViewUpdateService() {
        this.viewSubject = new BehaviorSubject_1.BehaviorSubject(null);
    }
    MaSc5ViewUpdateService.prototype.watchViewUpdate = function () {
        return this.viewSubject.asObservable();
    };
    MaSc5ViewUpdateService.prototype.updateView = function (type, data) {
        if (data === void 0) { data = null; }
        this.viewSubject.next({
            type: type,
            data: data
        });
    };
    MaSc5ViewUpdateService.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    MaSc5ViewUpdateService.ctorParameters = function () { return []; };
    return MaSc5ViewUpdateService;
}());
exports.MaSc5ViewUpdateService = MaSc5ViewUpdateService;
//# sourceMappingURL=view-update.service.js.map