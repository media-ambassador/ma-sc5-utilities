import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';

import { MaSc5CustomMaterialModule } from '../custom-material';

import { MaSc5BaseLayout } from './base.layout';
import { MaSc5MainHeaderComponent } from './main-header/main-header.component';
import { MaSc5MainMenuComponent } from './main-menu/main-menu.component';
import { MaSc5MainFooterComponent } from './main-footer/main-footer.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule,
    PerfectScrollbarModule,

    MaSc5CustomMaterialModule
  ],
  declarations: [
    MaSc5BaseLayout,

    MaSc5MainHeaderComponent,
    MaSc5MainMenuComponent,
    MaSc5MainFooterComponent
  ],
  exports: [
    MaSc5BaseLayout,

    MaSc5MainHeaderComponent,
    MaSc5MainMenuComponent,
    MaSc5MainFooterComponent
  ]
})
export class MaSc5BaseLayoutModule { }
