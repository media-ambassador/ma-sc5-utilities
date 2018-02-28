import { Injectable } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms/src/model';
import { IResponseValidation, IValidationMessage, IValidationMessageOption } from '../common.model';
import * as _ from 'lodash';

@Injectable()
export class ValidationService {

  constructor() { }

  handleValidation(form: FormGroup, validation: IResponseValidation[]) {
    _.forEach(validation, item => {
      var formControl = form.controls[item.field] as FormControl;
      this.setError(formControl, item.messages);
    });
  }

  setError(formControl: FormControl, messages: IValidationMessage[]) {
    var errors = {};
    _.forEach(messages, message => {
      errors[message.name] = {
        key: `validation.error.${message.name}`,
        variables: this.mapValidationOption(message.options)
      }
    });

    formControl.setErrors(errors);
  }

  private mapValidationOption(options: IValidationMessageOption[]) {
    var variables = {};
    _.forEach(options, option => {
      variables[option.name] = option.value
    })

    return variables;
  }

}
