"use strict";
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var sleep_service_1 = require("./sleep.service");
describe('SleepService', function () {
    beforeEach(function () { return testing_1.TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = testing_1.TestBed.get(sleep_service_1.SleepService);
        expect(service).toBeTruthy();
    });
});
