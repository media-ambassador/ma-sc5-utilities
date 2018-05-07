import { Component, Input, ViewChild, Output, EventEmitter, OnInit, TemplateRef, ContentChildren, ContentChild, QueryList, OnDestroy } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort, MatColumnDef, MatHeaderRowDef, MatRowDef, MatTable } from '@angular/material';
import { TranslateService } from '@ngx-translate/core';
import { SelectionModel, DataSource } from '@angular/cdk/collections';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'apollo-link';
import { merge } from 'rxjs/observable/merge';
import { TableSearch, TableColumn, TableSelectionEmmiter } from '../base-table/base-table.model';

import { MaSc5BaseTableDataSource } from '../base-table/base-table.data-source';

import * as _ from 'lodash';

@Component({
  selector: 'ma-sc5-table-wrapper',
  templateUrl: './table-wrapper.component.html',
  styleUrls: ['./table-wrapper.component.scss']
})
export class MaSc5TableWrapperComponent<T> implements OnInit {
  @Input() header: string;
  @Input() dataSource: MaSc5BaseTableDataSource<T>;
  @Input() totalCount: number;
  @Input() columns: TableColumn[];
  @Input() selectionField: string;
  @Input() pageSize: number;
  @Input() pageSizeOptions: number[];

  @Output() columnDisplayChange = new EventEmitter<TableColumn[]>();
  @Output() selectionChange = new EventEmitter<TableSelectionEmmiter<T>>();
  
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

  }
  
  ngOnDestroy() {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  private onTableSearchChange() {
    let search: TableSearch = {
      page: this.paginator.pageIndex + 1,
      limit: this.paginator.pageSize,
      sort: !!this.dataSource.sort.active ? [{column: this.dataSource.sort.active, asc: this.dataSource.sort.direction === 'asc'}] : null
    };

    this.dataSource.loadData(search);
  }

  updateColumnDisplay(index) {
    this.columns[index].display = !this.columns[index].display;
    this.columnDisplayChange.emit(this.columns);
  }

  isSelected(row) {
    return _.find(this.selection.selected, item => item[this.selectionField] == row[this.selectionField]);
  }

  toggleSelection(row) {
    this.isSelected(row)
      ? _.remove(this.selection.selected, item => item[this.selectionField] == row[this.selectionField])
      : this.selection.selected.push(row);

    this.selectionCurrentPage =this.selectionAll = false;
    this.emitSelection();
  }

  selectRow(row) {
    if (this.isSelected(row))
      return;

    this.selection.selected.push(row);
  }

  selectAll() {
    this.selectionAll = !this.selectionAll;
    this.selectionCurrentPage = false;

    this.selection.clear();
    this.emitSelection(this.selectionAll);
  }

  selectCurrentPage(allItems: false) {
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
}
