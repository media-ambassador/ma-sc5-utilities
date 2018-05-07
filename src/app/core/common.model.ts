import { error } from "util";

export interface ILoginIdentity {
  id: string;
  first_name: string;
  last_name: string;
  services: string[];
  default_service: string;
  password_timestamp: number;
}

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