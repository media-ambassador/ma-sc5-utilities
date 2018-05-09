"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var http_1 = require("@angular/http");
var http_2 = require("@angular/common/http");
var apollo_angular_1 = require("apollo-angular");
var apollo_angular_link_http_1 = require("apollo-angular-link-http");
var custom_apollo_service_1 = require("./custom-apollo.service");
var custom_apollo_model_1 = require("./custom-apollo.model");
var MaSc5CustomApolloModule = /** @class */ (function () {
    function MaSc5CustomApolloModule(parentModule, customApolloService) {
        this.customApolloService = customApolloService;
        if (parentModule) {
            throw new Error('CustomApolloModule is already loaded. Import only in CustomApolloModule');
        }
    }
    MaSc5CustomApolloModule.forRoot = function (config) {
        return {
            ngModule: MaSc5CustomApolloModule,
            providers: [
                custom_apollo_service_1.MaSc5CustomApolloService,
                { provide: custom_apollo_model_1.CustomApolloModuleConfigName, useValue: config }
            ]
        };
    };
    MaSc5CustomApolloModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [
                        common_1.CommonModule,
                        http_1.HttpModule,
                        http_2.HttpClientModule,
                        apollo_angular_1.ApolloModule,
                        apollo_angular_link_http_1.HttpLinkModule
                    ],
                    declarations: []
                },] },
    ];
    /** @nocollapse */
    MaSc5CustomApolloModule.ctorParameters = function () { return [
        { type: MaSc5CustomApolloModule, decorators: [{ type: core_1.Optional }, { type: core_1.SkipSelf },] },
        { type: custom_apollo_service_1.MaSc5CustomApolloService, },
    ]; };
    return MaSc5CustomApolloModule;
}());
exports.MaSc5CustomApolloModule = MaSc5CustomApolloModule;
//# sourceMappingURL=custom-apollo.module.js.map