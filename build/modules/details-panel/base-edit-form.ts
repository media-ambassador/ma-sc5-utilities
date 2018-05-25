import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MaSc5ValidationService } from '../../services/validation';

@Component({
  selector: 'ma-sc5-base-edit-form',
  template: ``,
  styles: ['']
})
export class MaSc5BaseEditForm<T> implements OnInit {
  @Input() formData: T;
  @Output() formSaved = new EventEmitter<T>();

  formGroup: FormGroup;

  constructor(protected validation: MaSc5ValidationService) { }

  ngOnInit() {
  }

}
