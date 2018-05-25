"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var material_1 = require("@angular/material");
var BehaviorSubject_1 = require("rxjs/BehaviorSubject");
var _ = require("lodash");
var MaSc5BaseTableDataSource = /** @class */ (function (_super) {
    __extends(MaSc5BaseTableDataSource, _super);
    function MaSc5BaseTableDataSource() {
        var _this = _super.call(this) || this;
        _this.sourceSubject = new BehaviorSubject_1.BehaviorSubject([]);
        _this.loadingSubject = new BehaviorSubject_1.BehaviorSubject(false);
        _this.searchOptions = {};
        _this.loading$ = _this.loadingSubject.asObservable();
        _this.total = 0;
        return _this;
    }
    MaSc5BaseTableDataSource.prototype.connect = function () {
        return this.sourceSubject;
    };
    MaSc5BaseTableDataSource.prototype.disconnect = function () {
        this.sourceSubject.complete();
        this.loadingSubject.complete();
    };
    MaSc5BaseTableDataSource.prototype.loadData = function (search) {
        if (search === void 0) { search = {}; }
        this.loadingSubject.next(true);
        this.searchOptions = _.extend(this.searchOptions, search);
    };
    MaSc5BaseTableDataSource.prototype.refreshData = function () {
        this.loadingSubject.next(true);
    };
    MaSc5BaseTableDataSource.prototype.clearDataSource = function () {
        this.sourceSubject.next([]);
        this.total = 0;
    };
    return MaSc5BaseTableDataSource;
}(material_1.MatTableDataSource));
exports.MaSc5BaseTableDataSource = MaSc5BaseTableDataSource;
//# sourceMappingURL=base-table.data-source.js.map