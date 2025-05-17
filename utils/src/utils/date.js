"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toDateString = exports.unixDaysToDate = void 0;
var unixDaysToDate = function (days) {
    return new Date(days * 86400);
};
exports.unixDaysToDate = unixDaysToDate;
var formatDate = function (date) {
    var year = date.getFullYear();
    var month = String(date.getMonth() + 1).padStart(2, "0");
    var day = String(date.getDate()).padStart(2, "0");
    return "".concat(year, "-").concat(month, "-").concat(day);
};
var toDateString = function (millis) {
    return formatDate(new Date(millis));
};
exports.toDateString = toDateString;
