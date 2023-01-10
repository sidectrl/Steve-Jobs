import { assert } from "chai"
import { rgb } from "../solution1"


describe("Tests", function () {
  it("Basic Tests", function () {
    assert.strictEqual(rgb(0, 0, 0), "000000")
    assert.strictEqual(rgb(0, 0, -20), "000000")
    assert.strictEqual(rgb(300, 255, 255), "FFFFFF")
    assert.strictEqual(rgb(173, 255, 47), "ADFF2F")
  })
})