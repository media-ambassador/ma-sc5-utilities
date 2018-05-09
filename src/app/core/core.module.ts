import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { CookieService } from 'ngx-cookie-service';

import { MaSc5CustomApolloModule } from '../lib/modules/custom-apollo/custom-apollo.module';
import { ValidationService } from '../lib/services/validation/validation.service';
import { Sc5UtilsService } from '../lib/services/sc5-utils/sc5-utils.service';

import { ApiUserService } from './api-user/api-user.service';
import { environment } from '../../environments/environment';

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

    ValidationService,
    CookieService,
    ApiUserService,
    Sc5UtilsService
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
