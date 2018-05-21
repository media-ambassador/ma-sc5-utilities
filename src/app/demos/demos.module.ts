import { UserListComponent } from './components/user-list/user-list.component';
import { HomeModule } from './home/home.module';
import { DemosRoutingModule, RoutableModules } from './demos-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { DemosBaseLayoutResolve } from './demos-base-layout.resolve';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { UserEditNameFormComponent } from './components/user-edit-name-form/user-edit-name-form.component';

@NgModule({
  imports: [
    CommonModule,

    RoutableModules,
    DemosRoutingModule,

    HomeModule
  ],
  declarations: [
  UserEditNameFormComponent],
  exports: [
  ],
  providers: [
    DemosBaseLayoutResolve
  ]
})
export class DemosModule { }
