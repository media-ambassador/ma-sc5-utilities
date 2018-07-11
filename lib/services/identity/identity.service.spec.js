"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var identity_service_1 = require("./identity.service");
describe('IdentityService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [identity_service_1.MaSc5IdentityService]
        });
    });
    it('should be created', testing_1.inject([identity_service_1.MaSc5IdentityService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=identity.service.spec.js.map