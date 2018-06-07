"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var core_2 = require("@ngx-translate/core");
var ngx_perfect_scrollbar_1 = require("ngx-perfect-scrollbar");
var custom_material_1 = require("../custom-material");
var base_table_component_1 = require("./base-table/base-table.component");
var table_wrapper_component_1 = require("./table-wrapper.component");
var table_selected_rows_component_1 = require("./table-selected-rows/table-selected-rows.component");
var MaSc5TableWrapperModule = /** @class */ (function () {
    function MaSc5TableWrapperModule() {
    }
    MaSc5TableWrapperModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [
                        common_1.CommonModule,
                        core_2.TranslateModule,
                        custom_material_1.MaSc5CustomMaterialModule,
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