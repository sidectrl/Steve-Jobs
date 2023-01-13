"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const solution3_1 = require("../solution3");
const solutions = [
    ['man i need a taxi up to ubud', 'taxi'],
    ['what time are we climbing up the volcano', 'volcano'],
    ['take me to semynak', 'semynak'],
    ['massage yes massage yes massage', 'massage'],
    ['take two bintang and a dance please', 'bintang'],
    ['aa b', 'aa'],
    ['b aa', 'b'],
    ['bb d', 'bb'],
    ['d bb', 'd'],
    ['aaa b', 'aaa'],
];
describe('Sample test', () => {
    it('works with test inputs', () => {
        solutions.forEach(([input, expected]) => {
            chai_1.assert.strictEqual((0, solution3_1.high)(input), expected);
        });
    });
});
