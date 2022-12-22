"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.narcissistic = void 0;
function narcissistic(value) {
    return value === String(value).split('').reduce((acc, item, _, { length }) => acc = Math.pow(Number(item), length), 0);
}
exports.narcissistic = narcissistic;
