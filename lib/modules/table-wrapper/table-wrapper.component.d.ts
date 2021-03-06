import { OnInit, OnDestroy, AfterContentInit, QueryList, EventEmitter } from '@angular/core';
import { MatPaginator, MatColumnDef, MatHeaderRowDef, MatRowDef, MatTable } from '@angular/material';
import { TranslateService } from '@ngx-translate/core';
import { SelectionModel } from '@angular/cdk/collections';
import { MaSc5BaseTableDataSource } from './base-table/base-table.data-source';
import { MaSc5TableColumn, MaSc5TableSelectionEmitter } from './base-table/base-table.model';
export declare class MaSc5TableWrapperComponent<T> implements OnInit, AfterContentInit, OnDestroy {
    private translateService;
    header: string;
    dataSource: MaSc5BaseTableDataSource<T>;
    totalCount: number;
    columns: MaSc5TableColumn[];
    selectionField: string;
    pageSize: number;
    pageSizeOptions: number[];
    columnDisplayChange: EventEmitter<MaSc5TableColumn[]>;
    selectionChange: EventEmitter<MaSc5TableSelectionEmitter<T>>;
    paginator: MatPaginator;
    table: MatTable<T>;
    columnDefs: QueryList<MatColumnDef>;
    headerRowDef: MatHeaderRowDef;
    rowDefs: QueryList<MatRowDef<T>>;
    selection: SelectionModel<any>;
    selectionAll: boolean;
    selectionCurrentPage: boolean;
    private _data;
    private subscriptions;
    constructor(translateService: TranslateService);
    ngOnInit(): void;
    ngAfterContentInit(): void;
    private rangeLabel;
    ngOnDestroy(): void;
    private onTableSearchChange();
    updateColumnDisplay(index: number): void;
    isSelected(row: T): T;
    toggleSelection(row: T): void;
    selectRow(row: T): void;
    selectAll(): void;
    selectCurrentPage(): void;
    private emitSelection(total?);
    clearSelection(): void;
    refreshList(): void;
}
