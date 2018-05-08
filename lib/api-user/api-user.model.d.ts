import { CustomResponse } from "../custom-apollo/custom-apollo.model";
export declare type ApiUserStatus = 'Active' | 'Inactive';
export declare type ApiUserEventType = 'authentication_succeded' | 'authentication_failed' | 'password_changed';
export interface ApiUserEvent {
    user_id: string;
    type: ApiUserEventType;
    timestamp: number;
    remote_addr: string;
}
export interface ApiUser {
    id: string;
    firstname: string;
    lastname: string;
    status: ApiUserStatus;
    created: number;
    services: string[];
    channels: string[];
    events: ApiUserEvent[];
}
export declare type ApiGetUserResponse = CustomResponse & {
    total: number;
    items: ApiUser[];
};
