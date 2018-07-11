
export interface MaSc5EnvironmentConfig {
  production: boolean;
  apiGraphQL: string;
  passwordMaxAge: number;
  tokenKeyName: string;
  tokenExpires: number;
  identityKeyName: string;
}

export const MaSc5EnvironmentConfigName = 'maSc5EnvironmentConfig';

export type MaSc5ApiUserStatus = 'Active' | 'Inactive';
