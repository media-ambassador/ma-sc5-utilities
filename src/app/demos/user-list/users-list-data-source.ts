import {CollectionViewer, DataSource} from "@angular/cdk/collections";
import { Observable } from "rxjs/Observable";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { catchError, finalize } from 'rxjs/operators';

import { MaSc5BaseTableDataSource } from "../../shared/components/base-table/base-table.data-source";
import { TableSearch } from "../../shared/components/base-table/base-table.model";

import { ApiUser } from "../../core/api-user/api-user.model";
import { ApiUserService } from "../../core/api-user/api-user.service";

import * as _ from 'lodash';

export class UsersDataSource extends MaSc5BaseTableDataSource<ApiUser> {

  constructor(private userService: ApiUserService) {
    super();
  }

  loadData(search: TableSearch = {}) {
    super.loadData(search);

    this.userService.getUsers(search)
      .subscribe(userList =>  {
        this.loadingSubject.next(false);

        if (!userList["items"])
          this.clearDataSoruce();

        this.sourceSubject.next(userList["items"]);
        this.total = userList["total"];
      });
  }
}