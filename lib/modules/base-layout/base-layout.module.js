"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
var core_2 = require("@ngx-translate/core");
var ngx_perfect_scrollbar_1 = require("ngx-perfect-scrollbar");
var custom_material_1 = require("../custom-material");
var base_layout_1 = require("./base.layout");
var main_header_component_1 = require("./main-header/main-header.component");
var main_menu_component_1 = require("./main-menu/main-menu.component");
var main_footer_component_1 = require("./main-footer/main-footer.component");
var MaSc5BaseLayoutModule = /** @class */ (function () {
    function MaSc5BaseLayoutModule() {
    }
    MaSc5BaseLayoutModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [
                        common_1.CommonModule,
                        router_1.RouterModule,
                        core_2.TranslateModule,
                        ngx_perfect_scrollbar_1.PerfectScrollbarModule,
                        custom_material_1.MaSc5CustomMaterialModule
                    ],
                    declarations: [
                        base_layout_1.MaSc5BaseLayout,
                        main_header_component_1.MaSc5MainHeaderComponent,
                        main_menu_component_1.MaSc5MainMenuComponent,
                        main_footer_component_1.MaSc5MainFooterComponent
                    ],
                    exports: [
                        base_layout_1.MaSc5BaseLayout,
                        main_header_component_1.MaSc5MainHeaderComponent,
                        main_menu_component_1.MaSc5MainMenuComponent,
                        main_footer_component_1.MaSc5MainFooterComponent
                    ]
                },] },
    ];
    return MaSc5BaseLayoutModule;
}());
exports.MaSc5BaseLayoutModule = MaSc5BaseLayoutModule;
//# sourceMappingURL=base-layout.module.js.map