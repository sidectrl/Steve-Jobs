import { assert } from 'chai';

import { findOutlier } from '../solution4';

it('Simple tests', function() {
  assert.equal(findOutlier([0, 1, 2]), 1);
  assert.equal(findOutlier([1, 2, 3]), 2);
  assert.equal(findOutlier([2, 6, 8, 10, 3]), 3);
  assert.equal(findOutlier([0, 0, 3, 0, 0]), 3);
  assert.equal(findOutlier([1, 1, 0, 1, 1]), 0);
});
