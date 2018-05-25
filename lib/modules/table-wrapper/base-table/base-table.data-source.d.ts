import { MatTableDataSource } from '@angular/material';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { MaSc5TableSearch } from './base-table.model';
export declare class MaSc5BaseTableDataSource<T> extends MatTableDataSource<T> {
    protected sourceSubject: BehaviorSubject<T[]>;
    protected loadingSubject: BehaviorSubject<boolean>;
    protected searchOptions: MaSc5TableSearch;
    loading$: Observable<boolean>;
    total: number;
    constructor();
    connect(): BehaviorSubject<T[]>;
    disconnect(): void;
    loadData(search?: MaSc5TableSearch): void;
    refreshData(): void;
    protected clearDataSource(): void;
}
