import {assert} from 'chai'
import {high} from '../solution3'

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
]

describe('Sample test', () => {
  it('works with test inputs', () => {
    solutions.forEach(([input, expected]) => {
      assert.strictEqual(high(input), expected)
    })
  })
})