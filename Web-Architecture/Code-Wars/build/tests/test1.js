"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const solution1_1 = require("../solution1");
describe("Tests", function () {
    it("Basic Tests", function () {
        chai_1.assert.strictEqual((0, solution1_1.rgb)(0, 0, 0), "000000");
        chai_1.assert.strictEqual((0, solution1_1.rgb)(0, 0, -20), "000000");
        chai_1.assert.strictEqual((0, solution1_1.rgb)(300, 255, 255), "FFFFFF");
        chai_1.assert.strictEqual((0, solution1_1.rgb)(173, 255, 47), "ADFF2F");
    });
});
