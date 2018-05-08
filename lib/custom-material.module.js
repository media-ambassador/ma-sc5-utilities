"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var material_1 = require("@angular/material");
var table_1 = require("@angular/cdk/table");
var mde_1 = require("@material-extended/mde");
var CustomMaterialModule = /** @class */ (function () {
    function CustomMaterialModule(iconRegistry, sanitizer) {
        this.iconRegistry = iconRegistry;
        this.sanitizer = sanitizer;
        this.registerIcons();
    }
    CustomMaterialModule.prototype.registerIcons = function () {
        this.iconRegistry.addSvgIcon('sc5-logo', this.sanitizer.bypassSecurityTrustResourceUrl('./assets/images/sc5-logo.svg'));
        this.iconRegistry.addSvgIcon('sc5-logo-text', this.sanitizer.bypassSecurityTrustResourceUrl('./assets/images/sc5-logo-text.svg'));
        this.iconRegistry.addSvgIcon('ma-logo', this.sanitizer.bypassSecurityTrustResourceUrl('./assets/images/ma-logo.svg'));
    };
    CustomMaterialModule.decorators = [
        { type: core_1.NgModule, args: [{
                    exports: [
                        table_1.CdkTableModule,
                        material_1.MatAutocompleteModule,
                        material_1.MatButtonModule,
                        material_1.MatButtonToggleModule,
                        material_1.MatCardModule,
                        material_1.MatCheckboxModule,
                        material_1.MatChipsModule,
                        material_1.MatStepperModule,
                        material_1.MatDatepickerModule,
                        material_1.MatDialogModule,
                        material_1.MatExpansionModule,
                        material_1.MatGridListModule,
                        material_1.MatIconModule,
                        material_1.MatInputModule,
                        material_1.MatListModule,
                        material_1.MatMenuModule,
                        material_1.MatNativeDateModule,
                        material_1.MatPaginatorModule,
                        material_1.MatProgressBarModule,
                        material_1.MatProgressSpinnerModule,
                        material_1.MatRadioModule,
                        material_1.MatRippleModule,
                        material_1.MatSelectModule,
                        material_1.MatSidenavModule,
                        material_1.MatSliderModule,
                        material_1.MatSlideToggleModule,
                        material_1.MatSnackBarModule,
                        material_1.MatSortModule,
                        material_1.MatTableModule,
                        material_1.MatTabsModule,
                        material_1.MatToolbarModule,
                        material_1.MatTooltipModule,
                        mde_1.MdePopoverModule
                    ]
                },] },
    ];
    /** @nocollapse */
    CustomMaterialModule.ctorParameters = function () { return [
        { type: material_1.MatIconRegistry, },
        { type: platform_browser_1.DomSanitizer, },
    ]; };
    return CustomMaterialModule;
}());
exports.CustomMaterialModule = CustomMaterialModule;
//# sourceMappingURL=custom-material.module.js.map