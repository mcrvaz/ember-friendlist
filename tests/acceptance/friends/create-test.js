import { test } from 'qunit';
import moduleForAcceptance from 'ember-friendlist/tests/helpers/module-for-acceptance';
import moment from 'moment';

const model = {
    name: 'AcceptanceCreate',
    lastname: 'Test',
    friendsSince: '08/10/2017'
};
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

// should test invalid cases with date picker

test('create success with default date', function(assert) {
    fillIn('#name-input', model.name);
    fillIn('#lastname-input', model.lastname);
    click('#save-btn');
    andThen(() => {
        assert.notOk(find('ul#errors li:first').text()); //assert no errors occurred
        assert.ok(find('div#success-modal').text()); //assert modal is shown
        click('button#btn-created');
        andThen(() => {
            assert.equal(currentURL(), '/friends/list');
            assert.ok(find(`td:contains(${model.name})`).text());
        });
    });
});
