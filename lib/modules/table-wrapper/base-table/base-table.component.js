"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var material_1 = require("@angular/material");
var MaSc5BaseTableComponent = /** @class */ (function () {
    function MaSc5BaseTableComponent() {
        this.columns = [];
        this.displayedColumns = [];
    }
    MaSc5BaseTableComponent.prototype.ngOnInit = function () {
        this.updateDisplayedColumns();
    };
    MaSc5BaseTableComponent.prototype.ngAfterViewInit = function () {
        this.dataSource.sort = this.tableSort;
    };
    MaSc5BaseTableComponent.prototype.updateDisplayedColumns = function () {
        var columns = [];
        this.columns.forEach(function (column) {
            if (column.display) {
                columns.push(column.name);
            }
        });
        this.displayedColumns = columns;
    };
    MaSc5BaseTableComponent.prototype.setColumns = function (columns) {
        this.columns = columns;
        this.updateDisplayedColumns();
    };
    MaSc5BaseTableComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'ma-sc5-base-table',
                    template: '',
                    styles: ["\n\n  "]
                },] },
    ];
    /** @nocollapse */
    MaSc5BaseTableComponent.ctorParameters = function () { return []; };
    MaSc5BaseTableComponent.propDecorators = {
        "tableSort": [{ type: core_1.ViewChild, args: [material_1.MatSort,] },],
    };
    return MaSc5BaseTableComponent;
}());
exports.MaSc5BaseTableComponent = MaSc5BaseTableComponent;
//# sourceMappingURL=base-table.component.js.map