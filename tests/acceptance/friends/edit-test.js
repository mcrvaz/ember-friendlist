import { test } from 'qunit';
import moduleForAcceptance from 'ember-friendlist/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | friends/edit');

test('visiting /friends/edit', function(assert) {
  visit('/friends/edit');

  andThen(function() {
    assert.equal(currentURL(), '/friends/edit');
  });
});
