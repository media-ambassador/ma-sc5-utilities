import { IValidationMessage } from "../validation/validation.model";
export declare const CustomApolloModuleConfigName = "customApolloModuleConfig";
export interface CustomApolloModuleConfig {
    apiUrl: string;
    tokenKey: string;
}
export interface IResponseValidation {
    field: string;
    messages: IValidationMessage[];
}
export declare type CustomResponse = {
    success: boolean;
    error: "invalid" | "validation" | "not-found" | "invalid" | "invalid-token" | "banned" | "not-logged";
    validation: IResponseValidation[];
};
