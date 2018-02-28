import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatIconModule,
  MatInputModule,
  MatIconRegistry,
  MatDialogModule,
  MatMenuModule
} from '@angular/material';
import {CdkTableModule} from '@angular/cdk/table';
import {MdePopoverModule} from '@material-extended/mde';

@NgModule({
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    MatInputModule,
    MatDialogModule,
    MatMenuModule,
    
    MdePopoverModule
  ]
})
export class CustomMaterialModule {
  constructor() { }
}
