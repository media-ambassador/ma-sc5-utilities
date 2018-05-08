"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Observable_1 = require("rxjs/Observable");
var apollo_angular_1 = require("apollo-angular");
var graphql_tag_1 = require("graphql-tag");
var GetUsersQuery = (_a = ["\nquery getUsers($search:UserSearchParams!){\n  UserList(search:$search){\n    success\n    total\n    items {\n      id\n      firstname\n      lastname,\n      status\n    }\n  }\n}\n"], _a.raw = ["\nquery getUsers($search:UserSearchParams!){\n  UserList(search:$search){\n    success\n    total\n    items {\n      id\n      firstname\n      lastname,\n      status\n    }\n  }\n}\n"], graphql_tag_1.default(_a));
var ApiUserService = /** @class */ (function () {
    function ApiUserService(apollo) {
        this.apollo = apollo;
    }
    ApiUserService.prototype.getUsers = function (search) {
        var _this = this;
        if (search === void 0) { search = {}; }
        return new Observable_1.Observable(function (observer) {
            _this.apollo.watchQuery({
                query: GetUsersQuery,
                variables: {
                    search: search,
                },
            })
                .valueChanges.subscribe(function (_a) {
                var data = _a.data;
                return observer.next(data.UserList);
            });
        });
    };
    ApiUserService.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    ApiUserService.ctorParameters = function () { return [
        { type: apollo_angular_1.Apollo, },
    ]; };
    return ApiUserService;
}());
exports.ApiUserService = ApiUserService;
var _a;
//# sourceMappingURL=api-user.service.js.map