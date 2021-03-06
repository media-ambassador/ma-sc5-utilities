import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatSort } from '@angular/material';

import { MaSc5TableColumn } from './base-table.model';
import { MaSc5BaseTableDataSource } from './base-table.data-source';

@Component({
  selector: 'ma-sc5-base-table',
  template: '',
  styles: ["\n\n  "]
})
export class MaSc5BaseTableComponent<T> implements OnInit, AfterViewInit {
  @ViewChild(MatSort) tableSort: MatSort;

  dataSource: MaSc5BaseTableDataSource<T>;
  columns: MaSc5TableColumn[] = [];
  displayedColumns: string[] = [];

  constructor() { }

  ngOnInit() {
    this.updateDisplayedColumns();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.tableSort;
  }

  protected updateDisplayedColumns() {
    const columns: string[] = [];

    this.columns.forEach(column => {
      if (column.display) {
        columns.push(column.name);
      }
    });

    this.displayedColumns = columns;
  }

  setColumns(columns: MaSc5TableColumn[]) {
    this.columns = columns;
    this.updateDisplayedColumns();
  }
}
