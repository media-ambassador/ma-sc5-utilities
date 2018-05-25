import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { MaSc5BaseEditForm } from '../../../lib/modules/details-panel';
import { FormGroup, FormControl } from '@angular/forms';
import { ApiUser } from '../../../core/api-user/api-user.model';
import { ApiUserService } from '../../../core/api-user/api-user.service';
import { MaSc5ValidationService } from '../../../lib/services/validation';

import * as _ from 'lodash';
@Component({
  selector: 'ma-sc5-user-edit-name-form',
  templateUrl: './user-edit-name-form.component.html',
  styleUrls: ['./user-edit-name-form.component.scss']
})
export class UserEditNameFormComponent extends MaSc5BaseEditForm<ApiUser> implements OnInit {

  constructor(protected validation: MaSc5ValidationService,
              private apiUserService: ApiUserService,
              private elementRef: ElementRef) {

  super(validation);
  }

  ngOnInit() {
    super.ngOnInit();

    this.formGroup = new FormGroup({
      id: new FormControl(this.formData.id),
      firstname: new FormControl(!!this.formData.firstname ? this.formData.firstname : ''),
      lastname: new FormControl(!!this.formData.lastname ? this.formData.lastname : '')
    });
  }

  saveElement() {
    this.apiUserService.changeUserName(this.formGroup.value).subscribe(
      result => {
        if (result.success) {
          this.formSaved.emit(this.formGroup.value);
        } else {
          switch (result.error) {
            case 'validation':
              this.validation.handleValidation(this.formGroup, result.validation);
              break;
          }
        }
      }
    );
  }

}
