import { OnInit, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MaSc5ValidationService } from '../../services/validation';
export declare class MaSc5BaseEditForm<T> implements OnInit {
    protected validation: MaSc5ValidationService;
    formData: T;
    formSaved: EventEmitter<T>;
    formGroup: FormGroup;
    constructor(validation: MaSc5ValidationService);
    ngOnInit(): void;
}
