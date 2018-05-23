import { Component, OnInit } from '@angular/core';
import { MaSc5BaseEditElementForm, MaSc5DetailsPanelService } from '../../../lib/modules/details-panel';

@Component({
  selector: 'ma-sc5-user-edit-status-form',
  templateUrl: './user-edit-status-form.component.html',
  styleUrls: ['./user-edit-status-form.component.scss']
})
export class UserEditStatusFormComponent extends MaSc5BaseEditElementForm {

  constructor(protected maSc5DetailsPanelService: MaSc5DetailsPanelService) {
    super(maSc5DetailsPanelService);
  }

  saveElement() {
    console.log('status save');
  }

}
