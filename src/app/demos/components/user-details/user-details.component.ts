import { NgxSmartModalService } from 'ngx-smart-modal';
import { Component, OnInit, Input } from '@angular/core';
import { ApiUser } from '../../../core/api-user/api-user.model';
import { ApiUserService } from '../../../core/api-user/api-user.service';

import * as _ from 'lodash';

@Component({
  selector: 'ma-sc5-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  @Input() user: ApiUser;

  readonly userNameEdit = 'userNameEdit';
  showModal: string;

  constructor(private ngxSmartModalService: NgxSmartModalService,
              public apiUserService: ApiUserService) { }

  ngOnInit() {
    this.user = Object.assign({}, this.user);
  }

  showEditModal(name: string) {
    this.showModal = name;

    setTimeout(() => this.ngxSmartModalService.getModal(name).open(), 200);

    this.ngxSmartModalService.getModal(name).onAnyCloseEventFinished.subscribe(() => {
      setTimeout(() => this.showModal = '', 100);
    });
  }

  closeModal(name: string) {
    this.ngxSmartModalService.getModal(name).close();
  }

  onFormSaved(user: ApiUser) {
    this.user = _.extend(this.user, user);

    this.closeModal(this.showModal);
  }

}
