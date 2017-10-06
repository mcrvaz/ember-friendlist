import { test } from 'qunit';
import moduleForAcceptance from 'ember-friendlist/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | list friends');

test('visiting /list-friends', function(assert) {
  visit('/list-friends');

  andThen(function() {
    assert.equal(currentURL(), '/list-friends');
  });
});
