import { FormGroup, FormControl } from '@angular/forms/src/model';
import { IValidationMessage } from './validation.model';
import { IResponseValidation } from '../custom-apollo/custom-apollo.model';
export declare class ValidationService {
    constructor();
    handleValidation(form: FormGroup, validation: IResponseValidation[]): void;
    setError(formControl: FormControl, messages: IValidationMessage[]): void;
    private mapValidationOption(options);
}
