import { test } from 'qunit';
import moduleForAcceptance from 'ember-friendlist/tests/helpers/module-for-acceptance';

const id = '59b18f31592fe8001b9bd8c3';
moduleForAcceptance('Acceptance | friends/edit', {
    beforeEach() {
        visit(`/friends/edit/${id}`);
    },
});

test(`visiting /friends/edit/${id}`, function(assert) {
    andThen(function() {
        assert.equal(currentURL(), `/friends/edit/${id}`);
    });
});

test(`visiting /friends/detail/${id} from /friends/edit/${id}`, function(assert) {
    andThen(function() {
        click('div#back-button button');
        andThen(() => assert.equal(currentURL(), `/friends/detail/${id}`));
    });
});

test('create with empty name', function(assert) {
    fillIn('#name-input', null);
    fillIn('#lastname-input', "lastname");
    fillIn('#friendsSince-input', moment());
    andThen(() => {
        assert.equal(find('ul#errors li:first').text(), "Nome deve ser preenchido.");
    });
});

test('create with less than 3 characters name', function(assert) {
    fillIn('#name-input', "a");
    fillIn('#lastname-input', "lastname");
    fillIn('#friendsSince-input', moment());
    andThen(() => {
        assert.equal(find('ul#errors li:first').text(), "Nome deve conter pelo menos 3 caracteres.");
    });
});

test('create with empty last name', function(assert) {
    fillIn('#name-input', "name");
    fillIn('#lastname-input', null);
    fillIn('#friendsSince-input', moment());
    andThen(() => {
        assert.equal(find('ul#errors li:first').text(), "Sobrenome deve ser preenchido.");
    });
});

test('create with less than 3 characters last name', function(assert) {
    fillIn('#name-input', "name");
    fillIn('#lastname-input', "a");
    fillIn('#friendsSince-input', moment());
    andThen(() => {
        assert.equal(find('ul#errors li:first').text(), "Sobrenome deve conter pelo menos 3 caracteres.");
    });
});

test('create with less than 3 characters last name', function(assert) {
    fillIn('#name-input', "name");
    fillIn('#lastname-input', "a");
    fillIn('#friendsSince-input', moment());
    andThen(() => {
        assert.equal(find('ul#errors li:first').text(), "Sobrenome deve conter pelo menos 3 caracteres.");
    });
});

// should test invalid cases with date picker
