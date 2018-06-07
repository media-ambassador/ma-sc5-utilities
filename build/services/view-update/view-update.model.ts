export type MaSc5ViewUpdateType = 'change' | 'remove' | 'new';

export interface MaSc5ViewUpdateEvent<T> {
  type: MaSc5ViewUpdateType;
  data: T;
}
