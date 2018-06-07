"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var _ = require("lodash");
var MaSc5ValidationService = /** @class */ (function () {
    function MaSc5ValidationService() {
    }
    MaSc5ValidationService.prototype.handleValidation = function (form, validation) {
        var _this = this;
        _.forEach(validation, function (item) {
            var formControl = form.controls[item.field];
            _this.setError(formControl, item.messages);
        });
    };
    MaSc5ValidationService.prototype.setError = function (formControl, messages) {
        var _this = this;
        var errors = {};
        _.forEach(messages, function (message) {
            errors[message.name] = {
                key: "validation.error." + message.name,
                variables: _this.mapValidationOption(message.options)
            };
        });
        formControl.setErrors(errors);
    };
    MaSc5ValidationService.prototype.mapValidationOption = function (options) {
        var variables = {};
        _.forEach(options, function (option) {
            variables[option.name] = option.value;
        });
        return variables;
    };
    MaSc5ValidationService.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    MaSc5ValidationService.ctorParameters = function () { return []; };
    return MaSc5ValidationService;
}());
exports.MaSc5ValidationService = MaSc5ValidationService;
//# sourceMappingURL=validation.service.js.map