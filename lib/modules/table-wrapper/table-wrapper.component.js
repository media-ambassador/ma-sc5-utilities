"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var material_1 = require("@angular/material");
var core_2 = require("@ngx-translate/core");
var collections_1 = require("@angular/cdk/collections");
var merge_1 = require("rxjs/observable/merge");
var base_table_data_source_1 = require("./base-table/base-table.data-source");
var _ = require("lodash");
var MaSc5TableWrapperComponent = /** @class */ (function () {
    function MaSc5TableWrapperComponent(translateService) {
        this.translateService = translateService;
        this.columnDisplayChange = new core_1.EventEmitter();
        this.selectionChange = new core_1.EventEmitter();
        this.selection = new collections_1.SelectionModel(true, []);
        this.selectionAll = false;
        this.selectionCurrentPage = false;
        this.subscriptions = [];
    }
    MaSc5TableWrapperComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.selectionField = !!this.selectionField ? this.selectionField : 'id';
        this.dataSource.connect().subscribe(function (data) { return _this._data = data; });
        this.pageSize = !!this.pageSize ? this.pageSize : 10;
        this.pageSizeOptions = !!this.pageSizeOptions ? this.pageSizeOptions : [5, 10, 50, 100];
    };
    MaSc5TableWrapperComponent.prototype.ngAfterContentInit = function () {
        var _this = this;
        this.columnDefs.forEach(function (columnDef) {
            _this.table.addColumnDef(columnDef);
        });
        this.rowDefs.forEach(function (rowDef) { return _this.table.addRowDef(rowDef); });
        this.table.setHeaderRowDef(this.headerRowDef);
        setTimeout(function () {
            _this.subscriptions.push(merge_1.merge(_this.dataSource.sort.sortChange).subscribe(function () {
                _this.clearSelection();
                _this.onTableSearchChange();
            }));
        });
        this.subscriptions.push(this.paginator.page.subscribe(function () {
            _this.onTableSearchChange();
            _this.selectionCurrentPage = false;
        }));
    };
    MaSc5TableWrapperComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (subscription) { return subscription.unsubscribe(); });
    };
    MaSc5TableWrapperComponent.prototype.onTableSearchChange = function () {
        var search = {
            page: this.paginator.pageIndex + 1,
            limit: this.paginator.pageSize,
            sort: !!this.dataSource.sort.active ? [{ column: this.dataSource.sort.active, asc: this.dataSource.sort.direction === 'asc' }] : null
        };
        this.dataSource.loadData(search);
    };
    MaSc5TableWrapperComponent.prototype.updateColumnDisplay = function (index) {
        this.columns[index].display = !this.columns[index].display;
        this.columnDisplayChange.emit(this.columns);
    };
    MaSc5TableWrapperComponent.prototype.isSelected = function (row) {
        var _this = this;
        return _.find(this.selection.selected, function (item) { return item[_this.selectionField] === row[_this.selectionField]; });
    };
    MaSc5TableWrapperComponent.prototype.toggleSelection = function (row) {
        var _this = this;
        this.isSelected(row)
            ? _.remove(this.selection.selected, function (item) { return item[_this.selectionField] === row[_this.selectionField]; })
            : this.selection.selected.push(row);
        this.selectionCurrentPage = this.selectionAll = false;
        this.emitSelection();
    };
    MaSc5TableWrapperComponent.prototype.selectRow = function (row) {
        if (this.isSelected(row)) {
            return;
        }
        this.selection.selected.push(row);
    };
    MaSc5TableWrapperComponent.prototype.selectAll = function () {
        this.selectionAll = !this.selectionAll;
        this.selectionCurrentPage = false;
        this.selection.clear();
        this.emitSelection(this.selectionAll);
    };
    MaSc5TableWrapperComponent.prototype.selectCurrentPage = function (allItems) {
        var _this = this;
        this.selectionCurrentPage = !this.selectionCurrentPage;
        this.selectionAll = false;
        this._data.forEach(function (item) { return _this.selectRow(item); });
        this.emitSelection();
    };
    MaSc5TableWrapperComponent.prototype.emitSelection = function (total) {
        if (total === void 0) { total = false; }
        this.selectionChange.emit({
            selection: this.selection,
            total: total
        });
    };
    MaSc5TableWrapperComponent.prototype.clearSelection = function () {
        this.selectionCurrentPage = this.selectionAll = false;
        this.selection.clear();
        this.selectionChange.emit({
            selection: this.selection,
            total: false
        });
    };
    MaSc5TableWrapperComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'ma-sc5-table-wrapper',
                    template: "\n\n    <section class=\"sc5-table-wrapper\" [ngClass]=\"{ 'loading': dataSource.loading$ | async }\">\n      <div class=\"table-loader\" *ngIf=\"dataSource.loading$ | async\">\n        <mat-spinner></mat-spinner>\n      </div>\n\n      <header>\n          <h1 class=\"mat-headline\">{{ header | translate }}</h1>\n\n          <div>\n            <button>\n              <mat-icon>refresh</mat-icon>\n            </button>\n          </div>\n\n          <div>\n            <button [matMenuTriggerFor]=\"columnDisplayMenu\" class=\"dropdown-menu mat-body-1\">\n              <mat-icon>list</mat-icon>\n            </button>\n    \n            <mat-menu #columnDisplayMenu>\n              <ul>\n                <ng-container *ngFor=\"let column of columns; let index = index;\">\n                  <li mat-menu-item *ngIf=\"column.name != 'select'\">\n                    <mat-checkbox [checked]=\"column.display\"\n                                  [disabled]=\"column.disabled\"\n                                  (change)=\"updateColumnDisplay(index)\"\n                                  (click)=\"$event.stopPropagation()\">\n                      {{ 'ma.sc5.tableWrapper.header.column.' + column.name | translate }}\n                    </mat-checkbox>\n                  </li>\n                </ng-container>\n              </ul>\n            </mat-menu>\n          </div>\n\n          <div>\n            <button>\n              <mat-icon>settings</mat-icon>\n            </button>\n          </div>\n\n      </header>\n\n      <perfect-scrollbar>\n        <mat-table [dataSource]=\"dataSource\">\n            <ng-container matColumnDef=\"select\">\n              <mat-header-cell *matHeaderCellDef>\n                <button [matMenuTriggerFor]=\"tableSelectionMenu\" class=\"dropdown-menu dropdown-selection\">\n                  <mat-checkbox [checked]=\"selectionAll || selectionCurrentPage\"\n                                [indeterminate]=\"selection.hasValue() && (!selectionAll && !selectionCurrentPage)\"></mat-checkbox>\n                </button>\n          \n                <mat-menu #tableSelectionMenu>\n                  <button mat-menu-item>\n                      <mat-checkbox [checked]=\"selectionCurrentPage\"\n                                    (change)=\"selectCurrentPage()\">\n                      {{ 'ma.sc5.tableWrapper.common.selectCurrentPage' | translate }}\n                    </mat-checkbox>\n                  </button>\n\n                  <button mat-menu-item>\n                      <mat-checkbox [checked]=\"selectionAll\"\n                                    (change)=\"selectAll()\">\n                      {{ 'ma.sc5.tableWrapper.common.selectAll' | translate }}\n                    </mat-checkbox>\n                  </button>\n                </mat-menu>\n\n              </mat-header-cell>\n              <mat-cell *matCellDef=\"let row\">\n                <mat-checkbox (click)=\"$event.stopPropagation()\"\n                              (change)=\"toggleSelection(row)\"\n                              [checked]=\"isSelected(row) || selectionAll\"\n                              [disabled]=\"selectionAll\">\n                </mat-checkbox>\n              </mat-cell>\n            </ng-container>\n\n            <ng-content></ng-content>\n    \n        </mat-table>\n      </perfect-scrollbar>\n\n      <footer>\n        <div class=\"pagination\">\n          <mat-paginator #paginator\n            [length]=\"totalCount\"\n            [pageSize]=\"pageSize\"\n            [pageSizeOptions]=\"pageSizeOptions\"\n            [showFirstLastButtons]=\"true\">\n          </mat-paginator>\n        </div>\n      </footer>\n    </section>\n  ",
                    styles: ["\n    /**\n     * Applies styles for users in high contrast mode. Note that this only applies\n     * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n     * attribute, however Chrome handles high contrast differently.\n     */\n    /* Theme for the ripple elements.*/\n    /* stylelint-disable material/no-prefixes */\n    /* stylelint-enable */\n    :host .sc5-table-wrapper {\n      position: relative;\n      padding-bottom: 56px;\n      width: 100%;\n      height: 100%; }\n      :host .sc5-table-wrapper .table-loader {\n        position: absolute;\n        left: 50%;\n        top: 50%;\n        transform: translate(-50%, -50%); }\n      :host .sc5-table-wrapper > header {\n        display: flex;\n        width: 100%;\n        justify-content: flex-end;\n        align-items: center;\n        height: 60px;\n        padding: 25px 25px 15px 25px;\n        background: white; }\n        :host .sc5-table-wrapper > header > h1 {\n          flex: 1;\n          margin: 0; }\n        :host .sc5-table-wrapper > header > div button {\n          border: none;\n          background: none; }\n          :host .sc5-table-wrapper > header > div button:focus {\n            outline: none; }\n      :host .sc5-table-wrapper mat-table {\n        padding-top: 57px;\n        background: white; }\n        :host .sc5-table-wrapper mat-table::ng-deep .mat-header-cell, :host .sc5-table-wrapper mat-table::ng-deep .mat-cell {\n          margin-right: 20px; }\n          :host .sc5-table-wrapper mat-table::ng-deep .mat-header-cell:last-of-type, :host .sc5-table-wrapper mat-table::ng-deep .mat-cell:last-of-type {\n            margin-right: 0; }\n        :host .sc5-table-wrapper mat-table::ng-deep .mat-header-cell {\n          position: relative;\n          overflow: visible;\n          margin-bottom: 0px; }\n          :host .sc5-table-wrapper mat-table::ng-deep .mat-header-cell .filter-field {\n            position: absolute;\n            bottom: -60px;\n            left: 0;\n            display: flex;\n            width: 100%;\n            z-index: 15; }\n            :host .sc5-table-wrapper mat-table::ng-deep .mat-header-cell .filter-field > * {\n              flex: 1; }\n            :host .sc5-table-wrapper mat-table::ng-deep .mat-header-cell .filter-field mat-input-container::ng-deep .mat-form-field-infix {\n              max-width: 100%; }\n        :host .sc5-table-wrapper mat-table::ng-deep .mat-header-row {\n          position: absolute;\n          left: 0;\n          top: 0;\n          width: 100%;\n          background: white;\n          z-index: 5; }\n        :host .sc5-table-wrapper mat-table::ng-deep .mat-cell {\n          overflow: visible; }\n        :host .sc5-table-wrapper mat-table::ng-deep .mat-column-select {\n          max-width: 50px; }\n          :host .sc5-table-wrapper mat-table::ng-deep .mat-column-select::ng-deep .mat-checkbox label {\n            margin-top: 5px; }\n      :host .sc5-table-wrapper.loading mat-table {\n        opacity: 0.2; }\n      :host .sc5-table-wrapper .dropdown-selection {\n        position: relative;\n        border: none;\n        background: none;\n        padding: 0; }\n        :host .sc5-table-wrapper .dropdown-selection::before {\n          display: block;\n          content: \"\";\n          position: absolute;\n          left: 50%;\n          top: 50%;\n          transform: translate(-50%, -50%);\n          width: 100%;\n          height: 100%;\n          z-index: 1; }\n      :host .sc5-table-wrapper footer {\n        display: block;\n        width: 100%;\n        position: absolute;\n        left: 0;\n        bottom: 0; }\n  "]
                },] },
    ];
    /** @nocollapse */
    MaSc5TableWrapperComponent.ctorParameters = function () { return [
        { type: core_2.TranslateService, },
    ]; };
    MaSc5TableWrapperComponent.propDecorators = {
        "header": [{ type: core_1.Input },],
        "dataSource": [{ type: core_1.Input },],
        "totalCount": [{ type: core_1.Input },],
        "columns": [{ type: core_1.Input },],
        "selectionField": [{ type: core_1.Input },],
        "pageSize": [{ type: core_1.Input },],
        "pageSizeOptions": [{ type: core_1.Input },],
        "columnDisplayChange": [{ type: core_1.Output },],
        "selectionChange": [{ type: core_1.Output },],
        "paginator": [{ type: core_1.ViewChild, args: [material_1.MatPaginator,] },],
        "table": [{ type: core_1.ViewChild, args: [material_1.MatTable,] },],
        "columnDefs": [{ type: core_1.ContentChildren, args: [material_1.MatColumnDef,] },],
        "headerRowDef": [{ type: core_1.ContentChild, args: [material_1.MatHeaderRowDef,] },],
        "rowDefs": [{ type: core_1.ContentChildren, args: [material_1.MatRowDef,] },],
    };
    return MaSc5TableWrapperComponent;
}());
exports.MaSc5TableWrapperComponent = MaSc5TableWrapperComponent;
//# sourceMappingURL=table-wrapper.component.js.map