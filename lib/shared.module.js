"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var http_1 = require("@angular/common/http");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var core_2 = require("@ngx-translate/core");
var http_loader_1 = require("@ngx-translate/http-loader");
var core_3 = require("@ngx-translate/core");
var custom_material_module_1 = require("./custom-material.module");
var map_to_iterable_pipe_1 = require("./pipes/map-to-iterable/map-to-iterable.pipe");
function HttpLoaderFactory(http) {
    return new http_loader_1.TranslateHttpLoader(http, "./assets/i18n/", ".json");
}
exports.HttpLoaderFactory = HttpLoaderFactory;
var SharedModule = /** @class */ (function () {
    function SharedModule(translate) {
        this.translate = translate;
        translate.setDefaultLang('pl');
    }
    SharedModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [
                        common_1.CommonModule,
                        forms_1.FormsModule,
                        router_1.RouterModule,
                        forms_1.ReactiveFormsModule,
                        custom_material_module_1.CustomMaterialModule,
                        core_2.TranslateModule.forRoot({
                            loader: {
                                provide: core_2.TranslateLoader,
                                useFactory: HttpLoaderFactory,
                                deps: [http_1.HttpClient]
                            }
                        })
                    ],
                    declarations: [
                        map_to_iterable_pipe_1.MapToIterablePipe,
                    ],
                    exports: [
                        forms_1.FormsModule,
                        forms_1.ReactiveFormsModule,
                        custom_material_module_1.CustomMaterialModule,
                        core_2.TranslateModule,
                        map_to_iterable_pipe_1.MapToIterablePipe,
                    ]
                },] },
    ];
    /** @nocollapse */
    SharedModule.ctorParameters = function () { return [
        { type: core_3.TranslateService, },
    ]; };
    return SharedModule;
}());
exports.SharedModule = SharedModule;
//# sourceMappingURL=shared.module.js.map