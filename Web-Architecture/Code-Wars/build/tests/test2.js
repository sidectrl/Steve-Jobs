"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const solution2_1 = require("../solution2");
describe('Tests', () => {
    it('Should pass sample tests', () => {
        chai_1.assert.equal((0, solution2_1.createPhoneNumber)([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]), "(123) 456-7890");
        chai_1.assert.equal((0, solution2_1.createPhoneNumber)([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), "(111) 111-1111");
        chai_1.assert.equal((0, solution2_1.createPhoneNumber)([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]), "(123) 456-7890");
    });
});
