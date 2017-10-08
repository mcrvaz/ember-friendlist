import { test } from 'qunit';
import moduleForAcceptance from 'ember-friendlist/tests/helpers/module-for-acceptance';

const model = {
    id: '59da3adc434f0a001bb60cb4',
    name: 'AcceptanceTest',
    lastname: 'Detail',
    friendsSince: '08/10/2017'
};
moduleForAcceptance('Acceptance | friends/detail', {
    beforeEach() {
        visit(`/friends/detail/${model.id}`);
    },
});

test(`visiting /friends/detail/${model.id}`, function(assert) {
    andThen(() => {
        assert.equal(currentURL(), `/friends/detail/${model.id}`);
    });
});

test(`visiting /friends/edit/${model.id} from /friends/detail/${model.id}`, function(assert) {
    andThen(() => {
        click('button#edit');
        andThen(() => assert.equal(currentURL(), `/friends/edit/${model.id}`));
    });
});

test(`visiting /friends/list from /friends/detail/${model.id}`, function(assert) {
    andThen(() => {
        click('div#back-button button');
        andThen(() => assert.equal(currentURL(), `/friends/list`));
    });
});

test(`name equals ${model.name}`, function(assert) {
    andThen(() => assert.equal(find('#name').text(), `${model.name}`));
});

test(`lastname equals ${model.lastname}`, function(assert) {
    andThen(() => assert.equal(find('#lastname').text(), `${model.lastname}`));
});

test(`friendsSince equals ${model.friendsSince}`, function(assert) {
    andThen(() => assert.equal(find('#friendsSince').text(), `${model.friendsSince}`));
});
