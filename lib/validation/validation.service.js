"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var _ = require("lodash");
var ValidationService = /** @class */ (function () {
    function ValidationService() {
    }
    ValidationService.prototype.handleValidation = function (form, validation) {
        var _this = this;
        _.forEach(validation, function (item) {
            var formControl = form.controls[item.field];
            _this.setError(formControl, item.messages);
        });
    };
    ValidationService.prototype.setError = function (formControl, messages) {
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
    ValidationService.prototype.mapValidationOption = function (options) {
        var variables = {};
        _.forEach(options, function (option) {
            variables[option.name] = option.value;
        });
        return variables;
    };
    ValidationService.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    ValidationService.ctorParameters = function () { return []; };
    return ValidationService;
}());
exports.ValidationService = ValidationService;
//# sourceMappingURL=validation.service.js.map