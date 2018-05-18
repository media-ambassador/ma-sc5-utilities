import { Component, OnInit } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';

import { MaSc5BaseTableComponent } from '../../../lib/modules/table-wrapper';
import { MaSc5TableSelectionEmmiter } from '../../../lib/modules/table-wrapper';

import { ApiUser } from '../../../core/api-user/api-user.model';
import { ApiUserService } from '../../../core/api-user/api-user.service';
import { UsersDataSource } from './users-list-data-source';

@Component({
  selector: 'ma-sc5-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent extends MaSc5BaseTableComponent<ApiUser> implements OnInit {
  selection = new SelectionModel<ApiUser>(true, []);
  isTotal = false;

  constructor(private userService: ApiUserService) {
    super();

    this.columns = [
      { name: 'select', display: true, disabled: true },
      { name: 'id', display: true, disabled: true },
      { name: 'firstname', display: true, disabled: false },
      { name: 'lastname', display: true, disabled: false },
      { name: 'status', display: true, disabled: false },
    ];
  }

  ngOnInit() {
    super.ngOnInit();

    this.dataSource = new UsersDataSource(this.userService);
    this.dataSource.loadData();
  }

  onSelectionChange(emiter: MaSc5TableSelectionEmmiter<ApiUser>) {
    this.selection = emiter.selection;
    this.isTotal = !!emiter.total ? emiter.total : false;
  }

  showDetails() {
    //TODO: Show sidebar panel
  }

  delete() {
    //TODO: Delete selected rows
  }

  test($event) {
    console.log('click');
    $event.stopPropagation();
  }

}
