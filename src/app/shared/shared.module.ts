import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateService } from '@ngx-translate/core';
import { SimpleNotificationsModule } from 'angular2-notifications';

import { MaSc5CustomMaterialModule } from '../lib/modules/custom-material/custom-material.module';
import { MaSc5TableWrapperModule } from '../lib/modules/table-wrapper/table-wrapper.module';

import { MaSc5MapToIterablePipe } from '../lib/pipes/map-to-iterable/map-to-iterable.pipe';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, "./assets/i18n/", ".json");
}

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    SimpleNotificationsModule.forRoot(),

    MaSc5CustomMaterialModule,
    MaSc5TableWrapperModule
  ],
  declarations: [
    MaSc5MapToIterablePipe,
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,

    MaSc5CustomMaterialModule,
    MaSc5TableWrapperModule,

    MaSc5MapToIterablePipe,
  ]
})
export class SharedModule {
  constructor(private translate: TranslateService) {
    translate.setDefaultLang('pl');
  }
}
