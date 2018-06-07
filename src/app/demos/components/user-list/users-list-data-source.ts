import {CollectionViewer, DataSource} from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { catchError, finalize } from 'rxjs/operators';

import { MaSc5BaseTableDataSource } from '../../../lib/modules/table-wrapper';
import { MaSc5TableSearch } from '../../../lib/modules/table-wrapper';

import { ApiUser } from '../../../core/api-user/api-user.model';
import { ApiUserService } from '../../../core/api-user/api-user.service';

import * as _ from 'lodash';

export class UsersDataSource extends MaSc5BaseTableDataSource<ApiUser> {

  constructor(private userService: ApiUserService) {
    super();
  }

  loadData(search: MaSc5TableSearch = {}) {
    super.loadData(search);

    this.userService.getUsers(this.searchOptions)
      .subscribe(userList =>  {
        this.loadingSubject.next(false);

        if (!userList['items']) {
          this.clearDataSource();
        }

        this.sourceSubject.next(userList['items']);
        this.total = userList['total'];
      });
  }

  refreshData() {
    super.refreshData();

    this.userService.getUsers(this.searchOptions)
      .subscribe(userList =>  {
        this.loadingSubject.next(false);

        this.sourceSubject.next(userList['items']);
        this.total = userList['total'];
      });
  }
}
