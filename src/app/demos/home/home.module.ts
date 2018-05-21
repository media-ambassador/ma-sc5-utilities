import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { UserListComponent } from '../components/user-list/user-list.component';
import { SharedModule } from '../../shared/shared.module';
import { UserDetailsComponent } from '../components/user-details/user-details.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    HomeComponent,
    UserListComponent,
    UserDetailsComponent
  ]
})
export class HomeModule { }
