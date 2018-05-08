import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';

import { MaSc5BaseTableComponent } from './base-table/base-table.component';
import { MaSc5TableWrapperComponent } from './table-wrapper.component';
import { MaSc5TableSelectedRowsComponent } from './table-selected-rows/table-selected-rows.component';
import { CustomMaterialModule } from '../../custom-material.module';

export function HttpLoaderTableWrapperFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, "./assets/i18n/components/table-wrapper/", ".json");
}

@NgModule({
  imports: [
    CommonModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderTableWrapperFactory,
        deps: [HttpClient]
      }
    }),
    CustomMaterialModule,
    PerfectScrollbarModule,
  ],
  declarations: [
    MaSc5BaseTableComponent,
    MaSc5TableWrapperComponent,
    MaSc5TableSelectedRowsComponent
  ],
  exports: [
    MaSc5BaseTableComponent,
    MaSc5TableWrapperComponent,
    MaSc5TableSelectedRowsComponent
  ]
})
export class MaSc5TableWrapperModule { }
