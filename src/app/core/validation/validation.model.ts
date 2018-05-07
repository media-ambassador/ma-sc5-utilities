export interface IValidationMessageOption {
  name: string;
  value: string;
}

export interface IValidationMessage {
  name: string;
  template: string;
  options: IValidationMessageOption[]
}