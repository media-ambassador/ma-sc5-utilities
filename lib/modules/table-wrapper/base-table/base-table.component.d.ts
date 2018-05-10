import { OnInit } from '@angular/core';
import { MatSort } from '@angular/material';
import { MaSc5TableColumn } from "./base-table.model";
import { MaSc5BaseTableDataSource } from './base-table.data-source';
export declare class MaSc5BaseTableComponent<T> implements OnInit {
    tableSort: MatSort;
    dataSource: MaSc5BaseTableDataSource<T>;
    columns: MaSc5TableColumn[];
    displayedColumns: string[];
    constructor();
    ngOnInit(): void;
    ngAfterViewInit(): void;
    protected updateDisplayedColumns(): void;
    setColumns(columns: MaSc5TableColumn[]): void;
}
