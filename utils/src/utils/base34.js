"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.decodeBase34 = exports.encodeBase34 = void 0;
var BASE34_CHARS = "0123456789ABCDEFGHJKLMNPQRSTUVWXYZ"; // Excludes 'I' and 'O'
var MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER;
/**
 * Encodes a number to a Base34 string.
 * Only supports numbers within the range of MAX_SAFE_INTEGER.
 */
var encodeBase34 = function (value) {
    if (value < 0) {
        throw new Error("Negative values are not supported.");
    }
    if (value > MAX_SAFE_INTEGER) {
        throw new Error("Value exceeds MAX_SAFE_INTEGER: ".concat(MAX_SAFE_INTEGER));
    }
    var base = 34;
    var encoded = "";
    while (value > 0) {
        var index = value % base;
        encoded = BASE34_CHARS[index] + encoded;
        value = Math.floor(value / base);
    }
    return encoded || "0";
};
exports.encodeBase34 = encodeBase34;
/**
 * Decodes a Base34 string to a number.
 */
var decodeBase34 = function (input) {
    var base = 34;
    var value = 0;
    for (var _i = 0, input_1 = input; _i < input_1.length; _i++) {
        var char = input_1[_i];
        var index = BASE34_CHARS.indexOf(char);
        if (index === -1) {
            throw new Error("Invalid Base34 character: ".concat(char));
        }
        value = value * base + index;
        if (value > MAX_SAFE_INTEGER) {
            throw new Error("Decoded value exceeds MAX_SAFE_INTEGER: ".concat(MAX_SAFE_INTEGER));
        }
    }
    return value;
};
exports.decodeBase34 = decodeBase34;
