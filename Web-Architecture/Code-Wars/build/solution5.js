"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.duplicateCount = void 0;
function duplicateCount(text) {
    text = text.toLowerCase();
    let count = 0;
    let charCount = {};
    for (let char of text) {
        charCount[char] = (charCount[char] || 0) + 1;
        if (charCount[char] === 2)
            count++;
    }
    return count;
}
exports.duplicateCount = duplicateCount;
