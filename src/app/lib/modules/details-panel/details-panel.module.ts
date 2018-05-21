import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaSc5DetailsPanelComponent } from './details-panel.component';
import { TranslateModule } from '@ngx-translate/core';
import { MaSc5CustomMaterialModule } from '../../../../../lib/modules/custom-material';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    MaSc5CustomMaterialModule,
    PerfectScrollbarModule
  ],
  declarations: [
    MaSc5DetailsPanelComponent
  ],
  exports: [
    MaSc5DetailsPanelComponent
  ]
})
export class MaSc5DetailsPanelModule { }
