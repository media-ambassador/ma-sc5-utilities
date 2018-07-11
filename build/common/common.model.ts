export interface MaSc5LoginIdentity {
  id: string;
  first_name: string;
  last_name: string;
  services: string[];
  default_service: string;
  channels: string[];
  default_channel: string;
  password_timestamp: number;
}

export interface MaSc5MenuItem {
  text: string;
  routerLink?: string;
  link?: string;
}

export type MaSc5ApiUserStatus = 'Active' | 'Inactive';
