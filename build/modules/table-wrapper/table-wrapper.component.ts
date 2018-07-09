import { Component,
         Input, Output,
         OnInit, OnDestroy, AfterViewInit, AfterContentInit,
         ViewChild, ContentChildren, ContentChild, QueryList,
         EventEmitter } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort, MatColumnDef, MatHeaderRowDef, MatRowDef, MatTable } from '@angular/material';
import { TranslateService } from '@ngx-translate/core';
import { SelectionModel, DataSource } from '@angular/cdk/collections';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'apollo-link';
import { merge } from 'rxjs/observable/merge';

import { MaSc5BaseTableDataSource } from './base-table/base-table.data-source';
import { MaSc5TableColumn, MaSc5TableSelectionEmitter, MaSc5TableSearch } from './base-table/base-table.model';

import * as _ from 'lodash';

@Component({
  selector: 'ma-sc5-table-wrapper',
  template: "\n\n    <section class=\"sc5-table-wrapper\" [ngClass]=\"{ 'loading': dataSource.loading$ | async }\">\n      <div class=\"table-loader\" *ngIf=\"dataSource.loading$ | async\">\n        <mat-spinner></mat-spinner>\n      </div>\n\n      <header>\n        <h1 class=\"mat-headline\">{{ header | translate }}</h1>\n\n        <div>\n          <button (click)=\"refreshList()\">\n            <mat-icon>refresh</mat-icon>\n          </button>\n        </div>\n\n        <div>\n          <button [matMenuTriggerFor]=\"columnDisplayMenu\" class=\"dropdown-menu mat-body-1\">\n            <mat-icon>list</mat-icon>\n          </button>\n\n          <mat-menu #columnDisplayMenu>\n            <ul>\n              <ng-container *ngFor=\"let column of columns; let index = index;\">\n                <li mat-menu-item *ngIf=\"column.name != 'select'\">\n                  <mat-checkbox [checked]=\"column.display\"\n                                [disabled]=\"column.disabled\"\n                                (change)=\"updateColumnDisplay(index)\"\n                                (click)=\"$event.stopPropagation()\">\n                    {{ 'ma.sc5.tableWrapper.header.column.' + column.name | translate }}\n                  </mat-checkbox>\n                </li>\n              </ng-container>\n            </ul>\n          </mat-menu>\n        </div>\n\n      </header>\n\n      <perfect-scrollbar>\n        <mat-table [dataSource]=\"dataSource\">\n            <ng-container matColumnDef=\"select\">\n              <mat-header-cell *matHeaderCellDef>\n                <button mat-button [matMenuTriggerFor]=\"tableSelectionMenu\" class=\"dropdown-menu dropdown-selection\">\n                  <mat-checkbox [checked]=\"selectionAll || selectionCurrentPage\"\n                                [indeterminate]=\"selection.hasValue() && (!selectionAll && !selectionCurrentPage)\"></mat-checkbox>\n                </button>\n\n                <mat-menu #tableSelectionMenu>\n                  <button mat-menu-item (click)=\"selectCurrentPage()\">\n                      <mat-checkbox [checked]=\"selectionCurrentPage\">\n                      {{ 'ma.sc5.tableWrapper.common.selectCurrentPage' | translate }}\n                    </mat-checkbox>\n                  </button>\n\n                  <button mat-menu-item (click)=\"selectAll()\">\n                      <mat-checkbox [checked]=\"selectionAll\">\n                      {{ 'ma.sc5.tableWrapper.common.selectAll' | translate }}\n                    </mat-checkbox>\n                  </button>\n                </mat-menu>\n\n              </mat-header-cell>\n              <mat-cell *matCellDef=\"let row\">\n                <mat-checkbox (click)=\"$event.stopPropagation()\"\n                              (change)=\"toggleSelection(row)\"\n                              [checked]=\"isSelected(row) || selectionAll\"\n                              [disabled]=\"selectionAll\">\n                </mat-checkbox>\n              </mat-cell>\n            </ng-container>\n\n            <ng-content></ng-content>\n\n        </mat-table>\n      </perfect-scrollbar>\n\n      <footer>\n        <div class=\"pagination\">\n          <mat-paginator #paginator\n            [length]=\"totalCount\"\n            [pageSize]=\"pageSize\"\n            [pageSizeOptions]=\"pageSizeOptions\"\n            [showFirstLastButtons]=\"true\">\n          </mat-paginator>\n        </div>\n      </footer>\n    </section>\n  ",
  styles: ["\n    /**\n     * Applies styles for users in high contrast mode. Note that this only applies\n     * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n     * attribute, however Chrome handles high contrast differently.\n     */\n    /* Theme for the ripple elements.*/\n    /* stylelint-disable material/no-prefixes */\n    /* stylelint-enable */\n    :host .sc5-table-wrapper {\n      position: relative;\n      padding-bottom: 56px;\n      width: 100%;\n      height: 100%; }\n      :host .sc5-table-wrapper .table-loader {\n        position: absolute;\n        left: 50%;\n        top: 50%;\n        transform: translate(-50%, -50%); }\n      :host .sc5-table-wrapper > header {\n        display: flex;\n        width: 100%;\n        justify-content: flex-end;\n        align-items: center;\n        height: 60px;\n        padding: 25px 25px 15px 25px;\n        background: white; }\n        :host .sc5-table-wrapper > header > h1 {\n          flex: 1;\n          margin: 0; }\n        :host .sc5-table-wrapper > header > div button {\n          border: none;\n          background: none;\n          cursor: pointer; }\n          :host .sc5-table-wrapper > header > div button:focus {\n            outline: none; }\n      :host .sc5-table-wrapper mat-table {\n        padding-top: 57px;\n        background: white; }\n        :host .sc5-table-wrapper mat-table::ng-deep .mat-header-cell, :host .sc5-table-wrapper mat-table::ng-deep .mat-cell {\n          margin-right: 20px; }\n          :host .sc5-table-wrapper mat-table::ng-deep .mat-header-cell:last-of-type, :host .sc5-table-wrapper mat-table::ng-deep .mat-cell:last-of-type {\n            margin-right: 0; }\n        :host .sc5-table-wrapper mat-table::ng-deep .mat-header-cell {\n          position: relative;\n          overflow: visible;\n          margin-bottom: 0px; }\n          :host .sc5-table-wrapper mat-table::ng-deep .mat-header-cell .filter-field {\n            position: absolute;\n            bottom: -60px;\n            left: 0;\n            display: flex;\n            width: 100%;\n            z-index: 15; }\n            :host .sc5-table-wrapper mat-table::ng-deep .mat-header-cell .filter-field > * {\n              flex: 1; }\n            :host .sc5-table-wrapper mat-table::ng-deep .mat-header-cell .filter-field mat-input-container::ng-deep .mat-form-field-infix {\n              max-width: 100%; }\n        :host .sc5-table-wrapper mat-table::ng-deep .mat-header-row {\n          position: absolute;\n          left: 0;\n          top: 0;\n          width: 100%;\n          background: white;\n          z-index: 5; }\n        :host .sc5-table-wrapper mat-table::ng-deep .mat-cell {\n          overflow: visible; }\n        :host .sc5-table-wrapper mat-table::ng-deep .mat-column-select {\n          max-width: 50px; }\n          :host .sc5-table-wrapper mat-table::ng-deep .mat-column-select::ng-deep .mat-checkbox label {\n            margin-top: 5px; }\n      :host .sc5-table-wrapper.loading mat-table {\n        opacity: 0.2; }\n      :host .sc5-table-wrapper .dropdown-selection {\n        position: relative;\n        border: none;\n        background: none;\n        padding: 0;\n        min-width: 20px; }\n        :host .sc5-table-wrapper .dropdown-selection::before {\n          display: block;\n          content: \"\";\n          position: absolute;\n          left: 50%;\n          top: 50%;\n          transform: translate(-50%, -50%);\n          width: 100%;\n          height: 100%;\n          z-index: 1; }\n      :host .sc5-table-wrapper footer {\n        display: block;\n        width: 100%;\n        position: absolute;\n        left: 0;\n        bottom: 0; }\n  "]
})
export class MaSc5TableWrapperComponent<T> implements OnInit, AfterContentInit, OnDestroy {
  @Input() header: string;
  @Input() dataSource: MaSc5BaseTableDataSource<T>;
  @Input() totalCount: number;
  @Input() columns: MaSc5TableColumn[];
  @Input() selectionField: string;
  @Input() pageSize: number;
  @Input() pageSizeOptions: number[];

  @Output() columnDisplayChange = new EventEmitter<MaSc5TableColumn[]>();
  @Output() selectionChange = new EventEmitter<MaSc5TableSelectionEmitter<T>>();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatTable) table: MatTable<T>;

  @ContentChildren(MatColumnDef) columnDefs: QueryList<MatColumnDef>;
  @ContentChild(MatHeaderRowDef) headerRowDef: MatHeaderRowDef;
  @ContentChildren(MatRowDef) rowDefs: QueryList<MatRowDef<T>>;

  selection = new SelectionModel<any>(true, []);
  selectionAll = false;
  selectionCurrentPage = false;

  private _data: any[];
  private subscriptions: Subscription[] = [];

  constructor(private translateService: TranslateService) { }

  ngOnInit() {
    this.selectionField = !!this.selectionField ? this.selectionField : 'id';

    this.dataSource.connect().subscribe(data => this._data = data);

    this.pageSize = !!this.pageSize ? this.pageSize : 10;
    this.pageSizeOptions = !!this.pageSizeOptions ? this.pageSizeOptions : [5, 10, 50, 100];
  }

  ngAfterContentInit() {
    this.columnDefs.forEach(columnDef => {
      this.table.addColumnDef(columnDef);
    });

    this.rowDefs.forEach(rowDef => this.table.addRowDef(rowDef));
    this.table.setHeaderRowDef(this.headerRowDef);

    setTimeout(() => {
      this.subscriptions.push(
        merge(this.dataSource.sort.sortChange).subscribe(() => {
          this.clearSelection();
          this.onTableSearchChange();
        })
      );
    });

    this.subscriptions.push(
      this.paginator.page.subscribe(() => {
        this.onTableSearchChange();
        this.selectionCurrentPage = false;
      })
    );

    this.paginator._intl.itemsPerPageLabel = this.translateService.instant('ma.sc5.tableWrapper.pagination.itemsPerPage');
    this.paginator._intl.getRangeLabel = this.rangeLabel;
  }

  private rangeLabel = (page: number, pageSize: number, length: number) => {
    if (length === 0 || pageSize === 0) {
      return `0 z ${length}`;
    }

    length = Math.max(length, 0);
    const startIndex = page * pageSize;
    const endIndex = startIndex < length ?
        Math.min(startIndex + pageSize, length) :
        startIndex + pageSize;

    return this.translateService.instant(
      'ma.sc5.tableWrapper.pagination.rangeLabel',
      { start: startIndex + 1, end: endIndex, total: length }
    );
  }

  ngOnDestroy() {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  private onTableSearchChange() {
    const search: MaSc5TableSearch = {
      page: this.paginator.pageIndex + 1,
      limit: this.paginator.pageSize,
      sort: !!this.dataSource.sort.active ? [{column: this.dataSource.sort.active, asc: this.dataSource.sort.direction === 'asc'}] : null
    };

    this.dataSource.loadData(search);
  }

  updateColumnDisplay(index: number) {
    this.columns[index].display = !this.columns[index].display;
    this.columnDisplayChange.emit(this.columns);
  }

  isSelected(row: T): T {
    return _.find(this.selection.selected, item => item[this.selectionField] === row[this.selectionField]);
  }

  toggleSelection(row: T) {
    this.isSelected(row)
      ? _.remove(this.selection.selected, (item: any) => item[this.selectionField] === row[this.selectionField])
      : this.selection.selected.push(row);

    this.selectionCurrentPage = this.selectionAll = false;
    this.emitSelection();
  }

  selectRow(row: T) {
    if (this.isSelected(row)) {
      return;
    }

    this.selection.selected.push(row);
  }

  selectAll() {
    this.selectionAll = !this.selectionAll;
    this.selectionCurrentPage = false;

    this.selection.clear();
    this.emitSelection(this.selectionAll);
  }

  selectCurrentPage() {
    this.selectionCurrentPage = !this.selectionCurrentPage;
    this.selectionAll = false;

    this._data.forEach(item => this.selectRow(item));
    this.emitSelection();
  }

  private emitSelection(total = false) {
    this.selectionChange.emit({
      selection: this.selection,
      total: total
    });
  }

  clearSelection() {
    this.selectionCurrentPage = this.selectionAll = false;
    this.selection.clear();

    this.selectionChange.emit({
      selection: this.selection,
      total: false
    });
  }

  refreshList() {
    this.dataSource.refreshData();
  }
}
