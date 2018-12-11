"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var sleep_service_1 = require("../services/sleep.service");
var overnight_sleep_data_1 = require("../data/overnight-sleep-data");
var stanford_sleepiness_data_1 = require("../data/stanford-sleepiness-data");
var HomePage = /** @class */ (function () {
    function HomePage(sleepService) {
        this.sleepService = sleepService;
        this.overnightLog = [''];
        this.sleepinessLog = [''];
    }
    HomePage.prototype.ngOnInit = function () {
        //console.log(this.allSleepData);
    };
    Object.defineProperty(HomePage.prototype, "allSleepData", {
        /* Ionic doesn't allow bindings to static variables, so this getter can be used instead. */
        get: function () {
            return sleep_service_1.SleepService.AllSleepData[0].summaryString;
        },
        enumerable: true,
        configurable: true
    });
    HomePage.prototype.nightInput = function () {
        this.sleepService.logOvernightData(new overnight_sleep_data_1.OvernightSleepData(this.bedTime, this.wakeTime));
        console.log(this.bedTime);
        console.log(this.wakeTime);
        console.log(this.allSleepData);
    };
    HomePage.prototype.ratingInput = function () {
        this.sleepService.logSleepinessData(new stanford_sleepiness_data_1.StanfordSleepinessData(this.sleepRating));
        console.log(this.sleepRating);
        console.log(this.allSleepData);
    };
    HomePage.prototype.overnightLogs = function (index, arr) {
        this.overnightLog[index] = arr[index].summaryString;
    };
    HomePage.prototype.sleepinessLogs = function (index, arr) {
        this.sleepinessLog[index] = arr[index].summaryString;
    };
    HomePage = __decorate([
        core_1.Component({
            selector: 'app-home',
            templateUrl: 'home.page.html',
            styleUrls: ['home.page.scss']
        })
    ], HomePage);
    return HomePage;
}());
exports.HomePage = HomePage;
