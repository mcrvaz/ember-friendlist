import { test } from 'qunit';
import moduleForAcceptance from 'ember-friendlist/tests/helpers/module-for-acceptance';

const id = '59b18f31592fe8001b9bd8c3';
moduleForAcceptance('Acceptance | friends/detail', {
    beforeEach() {
        visit(`/friends/detail/${id}`);
    },
});

test(`visiting /friends/detail/${id}`, function(assert) {
    andThen(function() {
        assert.equal(currentURL(), `/friends/detail/${id}`);
    });
});

test(`visiting /friends/edit/${id} from /friends/detail/${id}`, function(assert) {
    andThen(function() {
        click('button#edit');
        andThen(() => assert.equal(currentURL(), `/friends/edit/${id}`));
    });
});

test(`visiting /friends/list from /friends/detail/${id}`, function(assert) {
    andThen(function() {
        click('div#back-button button');
        andThen(() => assert.equal(currentURL(), `/friends/list`));
    });
});

// should test invalid cases with date picker
