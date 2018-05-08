"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var http_1 = require("@angular/common/http");
var http_loader_1 = require("@ngx-translate/http-loader");
var core_2 = require("@ngx-translate/core");
var ngx_perfect_scrollbar_1 = require("ngx-perfect-scrollbar");
var base_table_component_1 = require("./base-table/base-table.component");
var table_wrapper_component_1 = require("./table-wrapper.component");
var table_selected_rows_component_1 = require("./table-selected-rows/table-selected-rows.component");
var custom_material_module_1 = require("../../custom-material.module");
function HttpLoaderTableWrapperFactory(http) {
    return new http_loader_1.TranslateHttpLoader(http, "./assets/i18n/components/table-wrapper/", ".json");
}
exports.HttpLoaderTableWrapperFactory = HttpLoaderTableWrapperFactory;
var MaSc5TableWrapperModule = /** @class */ (function () {
    function MaSc5TableWrapperModule() {
    }
    MaSc5TableWrapperModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [
                        common_1.CommonModule,
                        core_2.TranslateModule.forRoot({
                            loader: {
                                provide: core_2.TranslateLoader,
                                useFactory: HttpLoaderTableWrapperFactory,
                                deps: [http_1.HttpClient]
                            }
                        }),
                        custom_material_module_1.CustomMaterialModule,
                        ngx_perfect_scrollbar_1.PerfectScrollbarModule,
                    ],
                    declarations: [
                        base_table_component_1.MaSc5BaseTableComponent,
                        table_wrapper_component_1.MaSc5TableWrapperComponent,
                        table_selected_rows_component_1.MaSc5TableSelectedRowsComponent
                    ],
                    exports: [
                        base_table_component_1.MaSc5BaseTableComponent,
                        table_wrapper_component_1.MaSc5TableWrapperComponent,
                        table_selected_rows_component_1.MaSc5TableSelectedRowsComponent
                    ]
                },] },
    ];
    return MaSc5TableWrapperModule;
}());
exports.MaSc5TableWrapperModule = MaSc5TableWrapperModule;
//# sourceMappingURL=table-wrapper.module.js.map