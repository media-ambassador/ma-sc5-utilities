import { FormGroup, FormControl } from '@angular/forms/src/model';
import { IResponseValidation, IValidationMessage } from '../common.model';
export declare class ValidationService {
    constructor();
    handleValidation(form: FormGroup, validation: IResponseValidation[]): void;
    setError(formControl: FormControl, messages: IValidationMessage[]): void;
    private mapValidationOption(options);
}
