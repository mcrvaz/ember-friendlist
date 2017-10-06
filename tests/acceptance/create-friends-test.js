import { test } from 'qunit';
import moduleForAcceptance from 'ember-friendlist/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | create friends');

test('visiting /create-friends', function(assert) {
  visit('/create-friends');

  andThen(function() {
    assert.equal(currentURL(), '/create-friends');
  });
});
