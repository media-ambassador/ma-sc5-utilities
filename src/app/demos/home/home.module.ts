import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { UserListComponent } from '../components/user-list/user-list.component';
import { SharedModule } from '../../shared/shared.module';
import { UserDetailsComponent } from '../components/user-details/user-details.component';
import { UserEditNameFormComponent } from '../components/user-edit-name-form/user-edit-name-form.component';
import { UserEditStatusFormComponent } from '../components/user-edit-status-form/user-edit-status-form.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    HomeComponent,
    UserListComponent,
    UserDetailsComponent,
    UserEditNameFormComponent,
    UserEditStatusFormComponent
  ]
})
export class HomeModule { }
