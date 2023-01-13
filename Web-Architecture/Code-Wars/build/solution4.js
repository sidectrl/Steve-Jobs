"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findOutlier = void 0;
function findOutlier(integers) {
    let evens = integers.filter(element => element % 2 === 0);
    let odds = integers.filter(element => element % 2 !== 0);
    return evens.length === 1 ? evens[0] : odds[0];
}
exports.findOutlier = findOutlier;
