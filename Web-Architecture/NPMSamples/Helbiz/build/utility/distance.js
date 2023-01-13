"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDistance = void 0;
function getDistance(x1, y1, x2, y2) {
    let y = x2 - x1;
    let x = y2 - y1;
    return Math.sqrt(x * x + y * y);
}
exports.getDistance = getDistance;
