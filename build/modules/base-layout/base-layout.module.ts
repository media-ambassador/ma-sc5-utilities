import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { MaSc5CustomMaterialModule } from '../custom-material';

import { BaseLayoutComponent } from './base-layout.component';
import { MaSc5MainHeaderComponent } from './main-header/main-header.component';
import { MaSc5MainMenuComponent } from './main-menu/main-menu.component';
import { MaSc5MainFooterComponent } from './main-footer/main-footer.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule,

    MaSc5CustomMaterialModule
  ],
  declarations: [
    BaseLayoutComponent,
    MaSc5MainHeaderComponent,
    MaSc5MainMenuComponent,
    MaSc5MainFooterComponent
  ],
  exports: [
    BaseLayoutComponent,
    MaSc5MainHeaderComponent,
    MaSc5MainMenuComponent,
    MaSc5MainFooterComponent
  ]
})
export class BaseLayoutModule { }
