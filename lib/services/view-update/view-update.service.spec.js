"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var view_update_service_1 = require("./view-update.service");
describe('ViewUpdateService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [view_update_service_1.MaSc5ViewUpdateService]
        });
    });
    it('should be created', testing_1.inject([view_update_service_1.MaSc5ViewUpdateService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=view-update.service.spec.js.map