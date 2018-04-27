import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatIconRegistry
} from '@angular/material';
import {CdkTableModule} from '@angular/cdk/table';
import {MdePopoverModule} from '@material-extended/mde';

@NgModule({
  exports: [
    CdkTableModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    
    MdePopoverModule
  ]
})
export class CustomMaterialModule {
  constructor(private iconRegistry: MatIconRegistry,
              private sanitizer: DomSanitizer) {
    this.registerIcons();
  }

  private registerIcons() {
    this.iconRegistry.addSvgIcon('sc5-logo', this.sanitizer.bypassSecurityTrustResourceUrl('./assets/images/sc5-logo.svg'));
    this.iconRegistry.addSvgIcon('sc5-logo-text', this.sanitizer.bypassSecurityTrustResourceUrl('./assets/images/sc5-logo-text.svg'));
    this.iconRegistry.addSvgIcon('ma-logo', this.sanitizer.bypassSecurityTrustResourceUrl('./assets/images/ma-logo.svg'));
  }
}

