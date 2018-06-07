import { FormGroup, FormControl } from '@angular/forms/src/model';
import { MaSc5ValidationMessage } from './validation.model';
import { MaSc5ResponseValidation } from '../../modules/custom-apollo';
export declare class MaSc5ValidationService {
    constructor();
    handleValidation(form: FormGroup, validation: MaSc5ResponseValidation[]): void;
    setError(formControl: FormControl, messages: MaSc5ValidationMessage[]): void;
    private mapValidationOption(options);
}
