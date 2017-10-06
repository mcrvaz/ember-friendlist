import { test } from 'qunit';
import moduleForAcceptance from 'ember-friendlist/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | edit friends');

test('visiting /edit-friends', function(assert) {
  visit('/edit-friends');

  andThen(function() {
    assert.equal(currentURL(), '/edit-friends');
  });
});
