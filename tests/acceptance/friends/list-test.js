import { test } from 'qunit';
import moduleForAcceptance from 'ember-friendlist/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | friends/list', {
    beforeEach() {
        visit(`/friends/list`);
    },
});

test('visiting /friends/list', function(assert) {
    andThen(() => {
        assert.equal(currentURL(), '/friends/list');
    });
});

test('visiting /friends/create from /friends/list', function(assert) {
    andThen(() => {
        click('button');
        andThen(() => assert.equal(currentRouteName(), 'friends.create'));
    });
});

test('visiting /friends/edit from /friends/list', function(assert) {
    andThen(() => {
        click('table tbody tr:first');
        andThen(() => assert.equal(currentRouteName(), 'friends.detail'));
    });
});

test(`AcceptanceTest exists`, function(assert) {
    andThen(() => assert.ok(find(`td:contains('AcceptanceTest')`).text()));
});
