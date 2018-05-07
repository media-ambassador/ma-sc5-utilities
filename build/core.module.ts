import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { ValidationService } from './validation/validation.service';
import { Sc5UtilsService } from './sc5-utils/sc5-utils.service';
import { CustomApolloModule } from './custom-apollo/custom-apollo.module';
import { CookieService } from 'ngx-cookie-service';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    HttpClientModule,
    CustomApolloModule.forRoot({
      apiUrl: 'http://develop.tkuchne.starcommerce.io/user',
      tokenKey: 'x-session-token'
    })
  ],
  exports: [
  ],
  providers: [

    ValidationService,
    CookieService,
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
