"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.distance = void 0;
function distance(myLong, myLat, scooterLong, scooterLat) {
    const dx = scooterLong - myLong;
    const dy = scooterLat - myLat;
    return Math.sqrt(dx * dx + dy * dy);
}
exports.distance = distance;
;
