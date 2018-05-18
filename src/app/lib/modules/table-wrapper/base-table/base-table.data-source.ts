import {CollectionViewer, DataSource} from '@angular/cdk/collections';
import {MatSort, MatTableDataSource} from '@angular/material';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { catchError, finalize } from 'rxjs/operators';

import { MaSc5TableSearch } from './base-table.model';

import * as _ from 'lodash';

export class MaSc5BaseTableDataSource<T> extends MatTableDataSource<T> {
  protected sourceSubject = new BehaviorSubject<T[]> ([]);
  protected loadingSubject = new BehaviorSubject<boolean> (false);
  protected searchOptions: MaSc5TableSearch = {};

  public loading$ = this.loadingSubject.asObservable();
  public total = 0;

  constructor() {
    super();
  }

  connect(): BehaviorSubject<T[]> {
    return this.sourceSubject;
  }

  disconnect(): void {
    this.sourceSubject.complete();
    this.loadingSubject.complete();
  }

  loadData(search: MaSc5TableSearch = {}) {
    this.loadingSubject.next(true);
    this.searchOptions = _.extend(this.searchOptions, search);
  }

  protected clearDataSource() {
    this.sourceSubject.next([]);
    this.total = 0;
  }
}
