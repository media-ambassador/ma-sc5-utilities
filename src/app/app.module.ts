import { NgModule, Injector, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LOCATION_INITIALIZED } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';

import { AppRoutingModule } from './app-routing.module';

import { CoreModule } from './core/core.module';

import { AppComponent } from './app.component';
import { DemosModule } from './demos/demos.module';
import { MaSc5IdentityService } from './lib/services/identity';

export function appInitializerFactory(translate: TranslateService, injector: Injector) {
  return () => new Promise<any>((resolve: any) => {
    const locationInitialized = injector.get(LOCATION_INITIALIZED, Promise.resolve(null));
    locationInitialized.then(() => {
      const langToSet = 'pl';
      translate.setDefaultLang('pl');
      translate.use(langToSet).subscribe(() =>
        success => {
          console.log(success);
        },
        err => console.error(`Problem with '${langToSet}' language initialization.'`),
        () => { resolve(null);
      });
    });
  });
}

export function identityFactory(sc5IdentityService: MaSc5IdentityService) {
  return  () => sc5IdentityService.init();
}

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,

    CoreModule,
    DemosModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: appInitializerFactory,
      deps: [TranslateService, Injector],
      multi: true
    },
    {
      provide: APP_INITIALIZER,
      useFactory: identityFactory,
      deps: [MaSc5IdentityService],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
