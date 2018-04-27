export interface IValidationMessageOption {
    name: string;
    value: string;
}
export interface IValidationMessage {
    name: string;
    template: string;
    options: IValidationMessageOption[];
}
export interface IResponseValidation {
    field: string;
    messages: IValidationMessage[];
}
export interface ILoginIdentity {
    id: string;
    first_name: string;
    last_name: string;
    services: string[];
    default_service: string;
    password_timestamp: number;
}
export declare type CustomResponse = {
    success: boolean;
    error: "invalid" | "validation" | "not-found" | "invalid" | "invalid-token" | "banned" | "not-logged";
    validation: IResponseValidation[];
};
export interface TableSearchSort {
    column: string;
    asc: boolean;
}
export interface TableSearch {
    page?: number;
    limit?: number;
    query?: Object;
    sort?: TableSearchSort[];
}
