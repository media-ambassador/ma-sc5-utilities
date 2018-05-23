import { Component, OnInit } from '@angular/core';
import { MaSc5BaseEditElementForm, MaSc5DetailsPanelService } from '../../../lib/modules/details-panel';

@Component({
  selector: 'ma-sc5-user-edit-name-form',
  templateUrl: './user-edit-name-form.component.html',
  styleUrls: ['./user-edit-name-form.component.scss']
})
export class UserEditNameFormComponent extends MaSc5BaseEditElementForm {

  constructor(protected maSc5DetailsPanelService: MaSc5DetailsPanelService) {
    super(maSc5DetailsPanelService);
  }

  saveElement() {
    console.log('name save');
  }

}
