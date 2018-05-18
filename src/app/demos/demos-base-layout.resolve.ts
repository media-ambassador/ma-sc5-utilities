import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/empty';

import { CookieService } from 'ngx-cookie-service';
import { MaSc5LoginIdentity } from '../lib/common';

import { environment } from '../../environments/environment';
import { MaSc5UtilsService } from '../lib/services/sc5-utils';

@Injectable()
export class DemosBaseLayoutResolve implements Resolve<MaSc5LoginIdentity> {

  constructor(private cookieService: CookieService,
              private sc5UtilsService: MaSc5UtilsService) {}

  resolve(route: ActivatedRouteSnapshot)  {
    const identity = this.cookieService.check(environment.identityKeyName)
      ? JSON.parse(this.cookieService.get(environment.identityKeyName)) as MaSc5LoginIdentity
      : null;

    if (!identity) {
      this.sc5UtilsService.logoutUser();
    }

    return Observable.of(identity);
  }
}
