"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const solution5_1 = require("../solution5");
describe("example", function () {
    it("test", function () {
        chai_1.assert.equal((0, solution5_1.duplicateCount)(""), 0);
        chai_1.assert.equal((0, solution5_1.duplicateCount)("abcde"), 0);
        chai_1.assert.equal((0, solution5_1.duplicateCount)("aabbcde"), 2);
        chai_1.assert.equal((0, solution5_1.duplicateCount)("aabBcde"), 2, "should ignore case");
        chai_1.assert.equal((0, solution5_1.duplicateCount)("Indivisibility"), 1);
        chai_1.assert.equal((0, solution5_1.duplicateCount)("Indivisibilities"), 2, "characters may not be adjacent");
    });
});
