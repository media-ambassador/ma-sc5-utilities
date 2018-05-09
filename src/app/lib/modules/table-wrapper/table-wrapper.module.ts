import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';

import { MaSc5CustomMaterialModule } from '../custom-material/custom-material.module';

import { MaSc5BaseTableComponent } from './base-table/base-table.component';
import { MaSc5TableWrapperComponent } from './table-wrapper.component';
import { MaSc5TableSelectedRowsComponent } from './table-selected-rows/table-selected-rows.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    MaSc5CustomMaterialModule,
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
