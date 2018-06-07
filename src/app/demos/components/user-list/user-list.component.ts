import { Component, OnInit, ViewChild } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';

import { MaSc5BaseTableComponent } from '../../../lib/modules/table-wrapper';
import { MaSc5TableSelectionEmitter } from '../../../lib/modules/table-wrapper';

import { ApiUser } from '../../../core/api-user/api-user.model';
import { ApiUserService } from '../../../core/api-user/api-user.service';
import { UsersDataSource } from './users-list-data-source';
import { MaSc5DetailsPanelComponent } from '../../../lib/modules/details-panel/details-panel.component';
import { MaSc5ViewUpdateService } from '../../../lib/services/view-update';

@Component({
  selector: 'ma-sc5-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent extends MaSc5BaseTableComponent<ApiUser> implements OnInit {
  selection = new SelectionModel<ApiUser>(true, []);
  isTotal = false;
  selectedUser: ApiUser;

  @ViewChild(MaSc5DetailsPanelComponent) detailsPanel: MaSc5DetailsPanelComponent;

  constructor(private userService: ApiUserService,
              private viewUpdateService: MaSc5ViewUpdateService<ApiUser>) {
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

    this.viewUpdateService.watchViewUpdate().subscribe(event => {
      this.dataSource.refreshData();
    });
  }

  onSelectionChange(emitter: MaSc5TableSelectionEmitter<ApiUser>) {
    this.selection = emitter.selection;
    this.isTotal = !!emitter.total ? emitter.total : false;
  }

  showDetails(user: ApiUser) {
    this.selectedUser = user;
    this.detailsPanel.open();
  }

  delete() {
    // TODO: Delete selected rows
  }

}
