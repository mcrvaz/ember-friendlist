import { test } from 'qunit';
import moduleForAcceptance from 'ember-friendlist/tests/helpers/module-for-acceptance';

const model = {
    id: '59da3adc434f0a001bb60cb4',
    name: 'AcceptanceTest',
    lastname: 'Detail',
    friendsSince: '08/10/2017'
};
moduleForAcceptance('Acceptance | friends/edit', {
    beforeEach() {
        visit(`/friends/edit/${model.id}`);
    },
});

test(`visiting /friends/edit/${model.id}`, function(assert) {
    andThen(function() {
        assert.equal(currentURL(), `/friends/edit/${model.id}`);
    });
});

test(`visiting /friends/detail/${model.id} from /friends/edit/${model.id}`, function(assert) {
    andThen(function() {
        click('div#back-button button');
        andThen(() => assert.equal(currentURL(), `/friends/detail/${model.id}`));
    });
});

test('edit with empty name', function(assert) {
    fillIn('#name-input', null);
    fillIn('#lastname-input', "lastname");
    click('#save-btn');
    andThen(() => {
        assert.equal(find('ul#errors li:first').text(), "Nome deve ser preenchido.");
    });
});

test('edit with less than 3 characters name', function(assert) {
    fillIn('#name-input', "a");
    fillIn('#lastname-input', "lastname");
    click('#save-btn');
    andThen(() => {
        assert.equal(find('ul#errors li:first').text(), "Nome deve conter pelo menos 3 caracteres.");
    });
});

test('edit with empty last name', function(assert) {
    fillIn('#name-input', "name");
    fillIn('#lastname-input', null);   
    click('#save-btn');
    andThen(() => {
        assert.equal(find('ul#errors li:first').text(), "Sobrenome deve ser preenchido.");
    });
});

test('edit with less than 3 characters last name', function(assert) {
    fillIn('#name-input', "name");
    fillIn('#lastname-input', "a");
    click('#save-btn');
    andThen(() => {
        assert.equal(find('ul#errors li:first').text(), "Sobrenome deve conter pelo menos 3 caracteres.");
    });
});

test('edit with less than 3 characters last name', function(assert) {
    fillIn('#name-input', "name");
    fillIn('#lastname-input', "a");
    click('#save-btn');
    andThen(() => {
        assert.equal(find('ul#errors li:first').text(), "Sobrenome deve conter pelo menos 3 caracteres.");
    });
});

// should test invalid cases with date picker

test('cancel edit', function(assert) {
    fillIn('#name-input', model.name + "Edit");
    fillIn('#lastname-input', model.lastname + "Edit");
    fillIn('#friendsSince-input', moment(model.friendsSince).add(1, 'days').format('DD-MM-YYYY'));
    click('#save-btn');
    andThen(() => {
        assert.notOk(find('ul#errors li:first').text()); //assert no errors occurred
        assert.ok(find('div#confirmation-modal').text()); //assert modal is shown
        click('button#btn-cancel');
        andThen(() => {
            assert.notOk(find('div#confirmation-modal').text()); //assert modal is hidden
            //assert model is rolled back
            assert.equal(find('#name-input').val(), `${model.name}`);
            assert.equal(find('#lastname-input').val(), `${model.lastname}`);
            assert.equal(find('#friendsSince-input').val(), `${model.friendsSince}`);
        });
    });
});

test('confirm edit with default values', function(assert) {
    click('#save-btn');
    andThen(() => {
        assert.notOk(find('ul#errors li:first').text()); //assert no errors occurred
        assert.ok(find('div#confirmation-modal').text()); //assert confirmation modal is shown
        click('button#btn-confirm');
        andThen(() => {
            assert.notOk(find('div#confirmation-modal').text()); //assert confirmation modal is hidden
            assert.ok(find('div#success-modal').text()); //assert success modal is shown
            click('button#btn-edited');
            andThen(() => {
                assert.equal(currentURL(), '/friends/list');
                assert.ok(find(`td:contains(${model.name})`).text());
            });
        });
    });
});