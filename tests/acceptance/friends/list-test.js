import { test } from 'qunit';
import moduleForAcceptance from 'ember-friendlist/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | friends/list');

test('visiting /friends/list', function(assert) {
    visit('/friends/list');

    andThen(function() {
        assert.equal(currentURL(), '/friends/list');
        assert.equal(find('h1').text(), 'Amigos');
        assert.equal(find('button').text(), 'Novo');
    });
});
