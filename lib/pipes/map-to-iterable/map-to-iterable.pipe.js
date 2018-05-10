"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var MaSc5MapToIterablePipe = /** @class */ (function () {
    function MaSc5MapToIterablePipe() {
    }
    MaSc5MapToIterablePipe.prototype.transform = function (dictionary) {
        var result = [];
        for (var key in dictionary) {
            if (dictionary.hasOwnProperty(key)) {
                result.push({ key: key, val: dictionary[key] });
            }
        }
        return result;
    };
    MaSc5MapToIterablePipe.decorators = [
        { type: core_1.Pipe, args: [{
                    name: 'mapToIterable'
                },] },
    ];
    return MaSc5MapToIterablePipe;
}());
exports.MaSc5MapToIterablePipe = MaSc5MapToIterablePipe;
//# sourceMappingURL=map-to-iterable.pipe.js.map