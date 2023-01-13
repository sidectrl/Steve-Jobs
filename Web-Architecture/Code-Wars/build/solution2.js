"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPhoneNumber = void 0;
function createPhoneNumber(numbers) {
    return "(" + numbers.slice(0, 3).join("") + ") " + numbers.slice(3, 6).join("") + "-" + numbers.slice(6, 10).join("");
}
exports.createPhoneNumber = createPhoneNumber;
