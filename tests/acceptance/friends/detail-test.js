import { test } from 'qunit';
import moduleForAcceptance from 'ember-friendlist/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | friends/detail');

test('visiting /friends/detail', function(assert) {
  visit('/friends/detail');

  andThen(function() {
    assert.equal(currentURL(), '/friends/detail');
  });
});
