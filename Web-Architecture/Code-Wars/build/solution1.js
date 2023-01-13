"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rgb = void 0;
function rgb(r, g, b) {
    r = clamp(r, 0, 255);
    g = clamp(g, 0, 255);
    b = clamp(b, 0, 255);
    return (r.toString(16).padStart(2, '0') + g.toString(16).padStart(2, '0') + b.toString(16).padStart(2, '0')).toUpperCase();
}
exports.rgb = rgb;
function clamp(value, min, max) {
    return Math.max(min, Math.min(value, max));
}
