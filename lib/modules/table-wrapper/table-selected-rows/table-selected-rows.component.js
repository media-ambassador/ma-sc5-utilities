"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var MaSc5TableSelectedRowsComponent = /** @class */ (function () {
    function MaSc5TableSelectedRowsComponent() {
    }
    MaSc5TableSelectedRowsComponent.prototype.ngOnInit = function () {
    };
    MaSc5TableSelectedRowsComponent.prototype.getItemsCounts = function () {
        return this.isTotal ? this.totalCount : this.items;
    };
    MaSc5TableSelectedRowsComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'ma-sc5-table-selected-rows',
                    template: "\n    <div class=\"selection-count\">\n      <span class=\"mat-body-2\">\n       {{ 'ma.sc5.tableWrapper.common.selectedRows' | translate:{ count: getItemsCounts() }  }}\n      </span>\n    </div>\n\n    <div class=\"actions\">\n      <ng-content></ng-content>\n    </div>\n  ",
                    styles: ["\n    /**\n     * Applies styles for users in high contrast mode. Note that this only applies\n     * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n     * attribute, however Chrome handles high contrast differently.\n     */\n    /* Theme for the ripple elements.*/\n    /* stylelint-disable material/no-prefixes */\n    /* stylelint-enable */\n    :host {\n      position: absolute;\n      left: 0;\n      top: 0;\n      z-index: 5;\n      display: flex;\n      width: 100%;\n      padding: 18px 25px;\n      background: #fb8c00; }\n      :host .selection-count {\n        display: flex;\n        align-items: center; }\n        :host .selection-count span {\n          color: white; }\n      :host .actions {\n        display: flex;\n        flex: 1;\n        justify-content: flex-end;\n        align-items: center; }\n        :host .actions::ng-deep button {\n          border: none;\n          background: none;\n          margin-left: 5px; }\n          :host .actions::ng-deep button:focus {\n            outline: none; }\n          :host .actions::ng-deep button:first-of-type {\n            margin-left: 0; }\n          :host .actions::ng-deep button mat-icon {\n            color: white; }\n  "]
                },] },
    ];
    /** @nocollapse */
    MaSc5TableSelectedRowsComponent.ctorParameters = function () { return []; };
    MaSc5TableSelectedRowsComponent.propDecorators = {
        "items": [{ type: core_1.Input },],
        "totalCount": [{ type: core_1.Input },],
        "isTotal": [{ type: core_1.Input },],
    };
    return MaSc5TableSelectedRowsComponent;
}());
exports.MaSc5TableSelectedRowsComponent = MaSc5TableSelectedRowsComponent;
//# sourceMappingURL=table-selected-rows.component.js.map