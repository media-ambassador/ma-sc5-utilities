import { MaSc5CustomResponse } from "../../lib/modules/custom-apollo";

export type ApiUserStatus = 'Active' | 'Inactive';
export type ApiUserEventType = 'authentication_succeded' | 'authentication_failed' | 'password_changed';

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

export type ApiGetUserResponse = MaSc5CustomResponse & {
  total: number;
  items: ApiUser[];
}