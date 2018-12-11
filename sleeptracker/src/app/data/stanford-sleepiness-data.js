"use strict";
/* from the Stanford Sleepiness Scale */
/* https://web.stanford.edu/~dement/sss.html */
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
var StanfordSleepinessData = /** @class */ (function (_super) {
    __extends(StanfordSleepinessData, _super);
    function StanfordSleepinessData(loggedValue, loggedAt) {
        if (loggedAt === void 0) { loggedAt = new Date(); }
        var _this = _super.call(this) || this;
        _this.loggedValue = loggedValue;
        _this.loggedAt = loggedAt;
        return _this;
    }
    StanfordSleepinessData.prototype.summaryString = function () {
        return this.loggedValue + ": " + StanfordSleepinessData.ScaleValues[this.loggedValue];
    };
    StanfordSleepinessData.ScaleValues = [undefined,
        'Feeling active, vital, alert, or wide awake',
        'Functioning at high levels, but not at peak; able to concentrate',
        'Awake, but relaxed; responsive but not fully alert',
        'Somewhat foggy, let down',
        'Foggy; losing interest in remaining awake; slowed down',
        'Sleepy, woozy, fighting sleep; prefer to lie down',
        'No longer fighting sleep, sleep onset soon; having dream-like thoughts']; //7
    return StanfordSleepinessData;
}(sleep_data_1.SleepData));
exports.StanfordSleepinessData = StanfordSleepinessData;
