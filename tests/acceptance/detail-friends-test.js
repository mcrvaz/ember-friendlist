import { test } from 'qunit';
import moduleForAcceptance from 'ember-friendlist/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | detail friends');

test('visiting /detail-friends', function(assert) {
  visit('/detail-friends');

  andThen(function() {
    assert.equal(currentURL(), '/detail-friends');
  });
});
