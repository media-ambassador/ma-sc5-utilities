import { error } from "util";

export interface ILoginIdentity {
  id: string;
  first_name: string;
  last_name: string;
  services: string[];
  default_service: string;
  password_timestamp: number;
}