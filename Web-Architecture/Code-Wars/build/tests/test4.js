"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const solution4_1 = require("../solution4");
it('Simple tests', function () {
    chai_1.assert.equal((0, solution4_1.findOutlier)([0, 1, 2]), 1);
    chai_1.assert.equal((0, solution4_1.findOutlier)([1, 2, 3]), 2);
    chai_1.assert.equal((0, solution4_1.findOutlier)([2, 6, 8, 10, 3]), 3);
    chai_1.assert.equal((0, solution4_1.findOutlier)([0, 0, 3, 0, 0]), 3);
    chai_1.assert.equal((0, solution4_1.findOutlier)([1, 1, 0, 1, 1]), 0);
});
