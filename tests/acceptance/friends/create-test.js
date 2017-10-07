import { test } from 'qunit';
import moduleForAcceptance from 'ember-friendlist/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | friends/create');

test('visiting /friends/create', function(assert) {
  visit('/friends/create');

  andThen(function() {
    assert.equal(currentURL(), '/friends/create');
  });
});
