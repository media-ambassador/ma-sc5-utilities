"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var http_1 = require("@angular/common/http");
var http_2 = require("@angular/http");
var validation_service_1 = require("./validation/validation.service");
var sc5_utils_service_1 = require("./sc5-utils/sc5-utils.service");
var custom_apollo_module_1 = require("./custom-apollo/custom-apollo.module");
var ngx_cookie_service_1 = require("ngx-cookie-service");
var CoreModule = /** @class */ (function () {
    /* make sure CoreModule is imported only by one NgModule the AppModule */
    function CoreModule(parentModule) {
        if (parentModule) {
            throw new Error('CoreModule is already loaded. Import only in AppModule');
        }
    }
    CoreModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [
                        common_1.CommonModule,
                        http_2.HttpModule,
                        http_1.HttpClientModule,
                        custom_apollo_module_1.CustomApolloModule.forRoot({
                            apiUrl: 'http://demo.rgorecki.starcommerce.io/user',
                            tokenKey: 'x-session-token'
                        })
                    ],
                    exports: [],
                    providers: [
                        validation_service_1.ValidationService,
                        ngx_cookie_service_1.CookieService,
                        sc5_utils_service_1.Sc5UtilsService
                    ]
                },] },
    ];
    /** @nocollapse */
    CoreModule.ctorParameters = function () { return [
        { type: CoreModule, decorators: [{ type: core_1.Optional }, { type: core_1.SkipSelf },] },
    ]; };
    return CoreModule;
}());
exports.CoreModule = CoreModule;
//# sourceMappingURL=core.module.js.map