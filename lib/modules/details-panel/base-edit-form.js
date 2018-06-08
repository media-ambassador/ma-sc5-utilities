"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var validation_1 = require("../../services/validation");
var MaSc5BaseEditForm = /** @class */ (function () {
    function MaSc5BaseEditForm(validation) {
        this.validation = validation;
        this.formSaved = new core_1.EventEmitter();
        this.formCanceled = new core_1.EventEmitter();
    }
    MaSc5BaseEditForm.prototype.ngOnInit = function () {
    };
    MaSc5BaseEditForm.prototype.cancelForm = function () {
        this.formCanceled.emit();
    };
    MaSc5BaseEditForm.prototype.resetForm = function () {
        this.formGroup.reset();
    };
    MaSc5BaseEditForm.prototype.onEnterPrevent = function (event) {
        event.preventDefault();
        event.target.blur();
        return false;
    };
    MaSc5BaseEditForm.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'ma-sc5-base-edit-form',
                    template: "",
                    styles: ['']
                },] },
    ];
    /** @nocollapse */
    MaSc5BaseEditForm.ctorParameters = function () { return [
        { type: validation_1.MaSc5ValidationService, },
    ]; };
    MaSc5BaseEditForm.propDecorators = {
        "formData": [{ type: core_1.Input },],
        "formSaved": [{ type: core_1.Output },],
        "formCanceled": [{ type: core_1.Output },],
    };
    return MaSc5BaseEditForm;
}());
exports.MaSc5BaseEditForm = MaSc5BaseEditForm;
//# sourceMappingURL=base-edit-form.js.map