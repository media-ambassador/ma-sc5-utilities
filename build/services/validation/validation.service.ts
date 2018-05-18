import { Injectable } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms/src/model';
import { MaSc5ValidationMessage, MaSc5ValidationMessageOption } from './validation.model';
import { MaSc5ResponseValidation } from '../../modules/custom-apollo';

import * as _ from 'lodash';

@Injectable()
export class MaSc5ValidationService {

  constructor() { }

  handleValidation(form: FormGroup, validation: MaSc5ResponseValidation[]) {
    _.forEach(validation, item => {
      const formControl = form.controls[item.field] as FormControl;
      this.setError(formControl, item.messages);
    });
  }

  setError(formControl: FormControl, messages: MaSc5ValidationMessage[]) {
    const errors: any = {};
    _.forEach(messages, message => {
      errors[message.name] = {
        key: `validation.error.${message.name}`,
        variables: this.mapValidationOption(message.options)
      };
    });

    formControl.setErrors(errors);
  }

  private mapValidationOption(options: MaSc5ValidationMessageOption[]) {
    const variables: any = {};
    _.forEach(options, option => {
      variables[option.name] = option.value;
    });

    return variables;
  }

}
