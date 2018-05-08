"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var apollo_angular_1 = require("apollo-angular");
var apollo_angular_link_http_1 = require("apollo-angular-link-http");
var apollo_link_1 = require("apollo-link");
var http_1 = require("@angular/common/http");
var apollo_link_error_1 = require("apollo-link-error");
var apollo_cache_inmemory_1 = require("apollo-cache-inmemory");
var custom_apollo_model_1 = require("./custom-apollo.model");
var ngx_cookie_service_1 = require("ngx-cookie-service");
var CustomApolloService = /** @class */ (function () {
    function CustomApolloService(config, apollo, httpLink, cookieService) {
        this.config = config;
        this.apollo = apollo;
        this.httpLink = httpLink;
        this.cookieService = cookieService;
        this.initApollo(config);
    }
    CustomApolloService.prototype.initApollo = function (config) {
        var _this = this;
        var authMiddleware = new apollo_link_1.ApolloLink(function (operation, forward) {
            if (_this.cookieService.check(config.tokenKey)) {
                operation.setContext({
                    headers: new http_1.HttpHeaders().set('x-jwt-token', _this.cookieService.get(config.tokenKey))
                });
            }
            return forward(operation);
        });
        var errorHandler = apollo_link_error_1.onError(function (_a) {
            var graphQLErrors = _a.graphQLErrors, networkError = _a.networkError;
            if (graphQLErrors)
                graphQLErrors.map(function (_a) {
                    var message = _a.message, locations = _a.locations, path = _a.path;
                    return console.log("[GraphQL error]: Message: " + message + ", Location: " + locations + ", Path: " + path);
                });
            if (networkError) {
                switch (networkError.status) {
                    case 401: {
                        throw ('401 not authorized');
                    }
                }
            }
        });
        var httpApiLink = this.httpLink.create({
            uri: config.apiUrl + "/api/graphql",
            withCredentials: true
        });
        this.apollo.create({
            link: apollo_link_1.from([authMiddleware, errorHandler, httpApiLink]),
            cache: new apollo_cache_inmemory_1.InMemoryCache(),
            defaultOptions: {
                watchQuery: {
                    errorPolicy: 'all'
                }
            }
        });
    };
    CustomApolloService.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    CustomApolloService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: core_1.Inject, args: [custom_apollo_model_1.CustomApolloModuleConfigName,] },] },
        { type: apollo_angular_1.Apollo, },
        { type: apollo_angular_link_http_1.HttpLink, },
        { type: ngx_cookie_service_1.CookieService, },
    ]; };
    return CustomApolloService;
}());
exports.CustomApolloService = CustomApolloService;
//# sourceMappingURL=custom-apollo.service.js.map