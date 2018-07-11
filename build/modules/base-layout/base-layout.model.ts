import { Observable } from 'rxjs/Observable';

import { MaSc5MenuItem } from '../../common/common.model';

export interface MaSc5BaseLayoutView {
  getTitle(): Observable<string>;
  getServiceName(): string;
}
