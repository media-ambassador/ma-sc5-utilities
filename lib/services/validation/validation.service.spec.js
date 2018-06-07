"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var validation_service_1 = require("./validation.service");
describe('ValidationService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [validation_service_1.MaSc5ValidationService]
        });
    });
    it('should be created', testing_1.inject([validation_service_1.MaSc5ValidationService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=validation.service.spec.js.map