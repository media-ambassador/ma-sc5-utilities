import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatSort } from '@angular/material';

import { TableColumn } from "./base-table.model";
import { MaSc5BaseTableDataSource } from './base-table.data-source';

@Component({
  selector: 'ma-sc5-base-table',
  template: '',
  styles: ["\n\n  "]
})
export class MaSc5BaseTableComponent<T> implements OnInit {
  @ViewChild(MatSort) tableSort: MatSort;

  dataSource: MaSc5BaseTableDataSource<T>;
  columns: TableColumn[] = [];
  displayedColumns: string[] = [];

  constructor() { }

  ngOnInit() {
    this.updateDisplayedColumns();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.tableSort;
  }

  protected updateDisplayedColumns() {
    let columns: string[] = [];

    this.columns.forEach(column => {
      if (column.display)
      columns.push(column.name);
    });

    this.displayedColumns = columns;
  }

  setColumns(columns: TableColumn[]) {
    this.columns = columns;
    this.updateDisplayedColumns();
  }
}
