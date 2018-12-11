"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var sleep_data_1 = require("./sleep-data");
var OvernightSleepData = /** @class */ (function (_super) {
    __extends(OvernightSleepData, _super);
    function OvernightSleepData(sleepStart, sleepEnd) {
        var _this = _super.call(this) || this;
        _this.sleepStart = sleepStart;
        _this.sleepEnd = sleepEnd;
        return _this;
    }
    OvernightSleepData.prototype.summaryString = function () {
        var sleepStart_ms = this.sleepStart.getTime();
        var sleepEnd_ms = this.sleepEnd.getTime();
        // Calculate the difference in milliseconds
        var difference_ms = sleepEnd_ms - sleepStart_ms;
        // Convert to hours and minutes
        return Math.floor(difference_ms / (1000 * 60 * 60)) + " hours, " + Math.floor(difference_ms / (1000 * 60) % 60) + " minutes.";
    };
    OvernightSleepData.prototype.dateString = function () {
        return "Night of " + this.sleepStart.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });
    };
    return OvernightSleepData;
}(sleep_data_1.SleepData));
exports.OvernightSleepData = OvernightSleepData;
