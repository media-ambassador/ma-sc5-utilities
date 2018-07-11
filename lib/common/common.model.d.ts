export interface MaSc5EnvironmentConfig {
    production: boolean;
    apiGraphQL: string;
    passwordMaxAge: number;
    tokenKeyName: string;
    tokenExpires: number;
    identityKeyName: string;
}
export declare const MaSc5EnvironmentConfigName = "maSc5EnvironmentConfig";
export declare type MaSc5ApiUserStatus = 'Active' | 'Inactive';
