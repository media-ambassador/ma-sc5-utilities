import { Injectable, Inject } from '@angular/core';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs/Observable';
import { MaSc5EnvironmentConfigName, MaSc5EnvironmentConfig } from '../../common/common.model';
import { MaSc5LoginIdentity } from './identity.model';

@Injectable()
export class MaSc5IdentityService {
  private identity: MaSc5LoginIdentity;
  private identitySubject = new ReplaySubject<MaSc5LoginIdentity>(1);

  constructor(@Inject(MaSc5EnvironmentConfigName) private config: MaSc5EnvironmentConfig,
              private cookieService: CookieService) {

    if (!this.config) {
      throw new Error('Config not set');
    }

    this.identity = this.cookieService.check(config.identityKeyName)
      ? JSON.parse(this.cookieService.get(config.identityKeyName))
      : null;
  }

  init(identity: MaSc5LoginIdentity = null): void {
    this.identity = !!identity ? identity : this.identity;
    this.identitySubject.next(this.identity);
  }

  watchIdentity(): Observable<MaSc5LoginIdentity> {
    return this.identitySubject.asObservable();
  }

  getIdentity(): MaSc5LoginIdentity {
    return this.identity;
  }

  clearIdentity(): void {
    this.identity = null;
    this.identitySubject.next(this.identity);
  }

}
