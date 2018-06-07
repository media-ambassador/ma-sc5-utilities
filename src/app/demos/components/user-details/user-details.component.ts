import { NgxSmartModalService } from 'ngx-smart-modal';
import { Component, OnInit, Input } from '@angular/core';

import { MaSc5ViewUpdateService } from '../../../lib/services/view-update';

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
              private viewUpdateService: MaSc5ViewUpdateService<ApiUser>) { }

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
    _.assignWith(this.user, user, (src, obj) => {
        return _.isUndefined(obj) ? src : obj;
      });

    this.viewUpdateService.updateView('change', this.user);
    this.closeModal(this.showModal);

  }

}
