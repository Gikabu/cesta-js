"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.b34DateToString = exports.parseB34Date = void 0;
var base34_1 = require("./utils/base34.js");
var date_1 = require("./utils/date.js");
var parseB34Date = function (encoded) {
    return (0, date_1.unixDaysToDate)((0, base34_1.decodeBase34)(encoded));
};
exports.parseB34Date = parseB34Date;
var b34DateToString = function (encoded) {
    return (0, date_1.toDateString)((0, base34_1.decodeBase34)(encoded) * 86400);
};
exports.b34DateToString = b34DateToString;
