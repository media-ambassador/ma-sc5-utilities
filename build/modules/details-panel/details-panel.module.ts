import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgxSmartModalModule } from 'ngx-smart-modal';

import { MaSc5DetailsPanelComponent } from './details-panel.component';
import { MaSc5CustomMaterialModule } from '../custom-material';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { MaSc5EditElementModal } from './edit-element-modal/edit-element.modal';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    MaSc5CustomMaterialModule,
    PerfectScrollbarModule,
    NgxSmartModalModule.forRoot()
  ],
  declarations: [
    MaSc5DetailsPanelComponent,
    MaSc5EditElementModal
  ],
  exports: [
    MaSc5DetailsPanelComponent,
    MaSc5EditElementModal
  ]
})
export class MaSc5DetailsPanelModule { }
