import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { SharedModule } from '../shared/shared.module';
import { MaSc5TableWrapperModule } from '../shared/components/table-wrapper/table-wrapper.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MaSc5TableWrapperModule
  ],
  declarations: [
    UserListComponent
  ],
  exports: [
    SharedModule,
    MaSc5TableWrapperModule,

    UserListComponent
  ]
})
export class DemosModule { }
