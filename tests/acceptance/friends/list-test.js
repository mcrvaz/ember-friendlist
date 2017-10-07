import { test } from 'qunit';
import moduleForAcceptance from 'ember-friendlist/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | friends/list', {
    beforeEach() {
        visit(`/friends/list`);
    },
});

test('visiting /friends/list', function(assert) {
    andThen(function() {
        assert.equal(currentURL(), '/friends/list');
    });
});

test('visiting /friends/create from /friends/list', function(assert) {
    andThen(function() {
        click('button');
        andThen(() => assert.equal(currentRouteName(), 'friends.create'));
    });
});

test('visiting /friends/edit from /friends/list', function(assert) {
    andThen(function() {
        click('table tbody tr:first');
        andThen(() => assert.equal(currentRouteName(), 'friends.detail'));
    });
});
