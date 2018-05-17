import { UserListComponent } from './components/user-list/user-list.component';
import { HomeModule } from './home/home.module';
import { DemosRoutingModule, RoutableModules } from './demos-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,

    RoutableModules,
    DemosRoutingModule,

    HomeModule
  ],
  declarations: [
  ],
  exports: [
  ]
})
export class DemosModule { }
