import { Component, OnInit } from '@angular/core';
import { MaSc5BaseEditForm } from '../../../lib/modules/details-panel';
import { MaSc5ValidationService } from '../../../lib/services/validation';
import { ApiUser } from '../../../core/api-user/api-user.model';

@Component({
  selector: 'ma-sc5-user-edit-status-form',
  templateUrl: './user-edit-status-form.component.html',
  styleUrls: ['./user-edit-status-form.component.scss']
})
export class UserEditStatusFormComponent extends MaSc5BaseEditForm<ApiUser> {

  constructor(protected validation: MaSc5ValidationService) {
    super(validation);
  }

  saveElement() {
    console.log('status save');
  }

}
