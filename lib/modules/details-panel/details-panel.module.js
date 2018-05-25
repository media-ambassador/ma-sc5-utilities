"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var core_2 = require("@ngx-translate/core");
var ngx_smart_modal_1 = require("ngx-smart-modal");
var details_panel_component_1 = require("./details-panel.component");
var custom_material_1 = require("../custom-material");
var ngx_perfect_scrollbar_1 = require("ngx-perfect-scrollbar");
var edit_element_modal_1 = require("./edit-element-modal/edit-element.modal");
var base_edit_form_1 = require("./base-edit-form");
var MaSc5DetailsPanelModule = /** @class */ (function () {
    function MaSc5DetailsPanelModule() {
    }
    MaSc5DetailsPanelModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [
                        common_1.CommonModule,
                        core_2.TranslateModule,
                        custom_material_1.MaSc5CustomMaterialModule,
                        ngx_perfect_scrollbar_1.PerfectScrollbarModule,
                        ngx_smart_modal_1.NgxSmartModalModule.forRoot()
                    ],
                    declarations: [
                        details_panel_component_1.MaSc5DetailsPanelComponent,
                        edit_element_modal_1.MaSc5EditElementModal,
                        base_edit_form_1.MaSc5BaseEditForm
                    ],
                    exports: [
                        details_panel_component_1.MaSc5DetailsPanelComponent,
                        edit_element_modal_1.MaSc5EditElementModal,
                        base_edit_form_1.MaSc5BaseEditForm
                    ]
                },] },
    ];
    return MaSc5DetailsPanelModule;
}());
exports.MaSc5DetailsPanelModule = MaSc5DetailsPanelModule;
//# sourceMappingURL=details-panel.module.js.map