import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { CookieService } from 'ngx-cookie-service';

import { MaSc5CustomApolloModule } from '../lib/modules/custom-apollo';
import { MaSc5ValidationService } from '../lib/services/validation';
import { MaSc5UtilsService } from '../lib/services/sc5-utils';
import { MaSc5RwdBreakpointsService } from '../lib/services/rwd-breakpoints/';
import { MaSc5ViewUpdateService } from '../lib/services/view-update';

import { ApiUserService } from './api-user/api-user.service';
import { environment } from '../../environments/environment';
import { MaSc5IdentityService } from '../lib/services/identity/identity.service';
import { MaSc5EnvironmentConfigName } from '../lib/common';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    HttpClientModule,
    MaSc5CustomApolloModule.forRoot({
      apiUrl: environment.apiGraphQL,
      tokenKey: environment.tokenKeyName
    })
  ],
  exports: [
  ],
  providers: [
    CookieService,

    MaSc5ValidationService,
    MaSc5UtilsService,
    MaSc5RwdBreakpointsService,
    MaSc5ViewUpdateService,
    MaSc5IdentityService,
    { provide: MaSc5EnvironmentConfigName, useValue: environment },

    ApiUserService,
  ]
})
export class CoreModule {
  /* make sure CoreModule is imported only by one NgModule the AppModule */
  constructor (@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import only in AppModule');
    }
  }
}
