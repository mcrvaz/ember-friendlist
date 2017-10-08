import { test } from 'qunit';
import moduleForAcceptance from 'ember-friendlist/tests/helpers/module-for-acceptance';
import moment from 'moment';

moduleForAcceptance('Acceptance | friends/create', {
    beforeEach() {
        visit('/friends/create');
    },
});

test('visiting /friends/create', function(assert) {
    andThen(() => {
        assert.equal(currentURL(), '/friends/create');
    });
});

test(`visiting /friends/list from /friends/create`, function(assert) {
    andThen(() => {
        click('div#back-button button');
        andThen(() => assert.equal(currentURL(), `/friends/list`));
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
