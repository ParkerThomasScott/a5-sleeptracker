"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var overnight_sleep_data_1 = require("../data/overnight-sleep-data");
var stanford_sleepiness_data_1 = require("../data/stanford-sleepiness-data");
var SleepService = /** @class */ (function () {
    function SleepService() {
        if (SleepService_1.LoadDefaultData) {
            this.addDefaultData();
            SleepService_1.LoadDefaultData = false;
        }
    }
    SleepService_1 = SleepService;
    SleepService.prototype.addDefaultData = function () {
        //this.logOvernightData(new OvernightSleepData(new Date('November 12, 2018 01:03:00'), new Date('November 12, 2018 09:25:00')));
        this.logSleepinessData(new stanford_sleepiness_data_1.StanfordSleepinessData(4, new Date('November 12, 2018 14:38:00')));
        this.logOvernightData(new overnight_sleep_data_1.OvernightSleepData(new Date('November 12, 2018 23:11:00'), new Date('November 13, 2018 08:03:00')));
    };
    SleepService.prototype.logOvernightData = function (sleepData) {
        SleepService_1.AllSleepData.push(sleepData);
        SleepService_1.AllOvernightData.push(sleepData);
    };
    SleepService.prototype.logSleepinessData = function (sleepData) {
        SleepService_1.AllSleepData.push(sleepData);
        SleepService_1.AllSleepinessData.push(sleepData);
    };
    var SleepService_1;
    SleepService.LoadDefaultData = true;
    SleepService.AllSleepData = [];
    SleepService.AllOvernightData = [];
    SleepService.AllSleepinessData = [];
    SleepService = SleepService_1 = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], SleepService);
    return SleepService;
}());
exports.SleepService = SleepService;
