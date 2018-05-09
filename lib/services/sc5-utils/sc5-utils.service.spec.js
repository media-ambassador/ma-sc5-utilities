"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var sc5_utils_service_1 = require("./sc5-utils.service");
describe('Sc5UtilsService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [sc5_utils_service_1.Sc5UtilsService]
        });
    });
    it('should be created', testing_1.inject([sc5_utils_service_1.Sc5UtilsService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=sc5-utils.service.spec.js.map