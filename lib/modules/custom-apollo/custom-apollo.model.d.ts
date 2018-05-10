import { MaSc5ValidationMessage } from "../../services/validation/validation.model";
export declare const MaSc5CustomApolloModuleConfigName = "customApolloModuleConfig";
export interface MaSc5CustomApolloModuleConfig {
    apiUrl: string;
    tokenKey: string;
}
export interface MaSc5ResponseValidation {
    field: string;
    messages: MaSc5ValidationMessage[];
}
export declare type MaSc5CustomResponse = {
    success: boolean;
    error: "invalid" | "validation" | "not-found" | "invalid" | "invalid-token" | "banned" | "not-logged";
    validation: MaSc5ResponseValidation[];
};
