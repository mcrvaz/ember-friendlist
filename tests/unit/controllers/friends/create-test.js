import { moduleFor } from 'ember-qunit';
import test from 'ember-sinon-qunit/test-support/test';
import wait from 'ember-test-helpers/wait';
import Changeset from 'ember-changeset';

var controller;
moduleFor('controller:friends/create', 'Unit | Controller | friends/create', {
    beforeEach() {
        controller = this.subject();
    }
});

test('shows loading', function(assert) {
    controller.send('showLoading');
    assert.equal(controller.get('isShowingLoading'), true);
});

test('hides loading', function(assert) {
    controller.send('hideLoading');
    assert.equal(controller.get('isShowingLoading'), false);
});

test('shows modal', function(assert) {
    controller.send('showModal');
    assert.equal(controller.get('isShowingModal'), true);
});

test('hides modal', function(assert) {
    controller.send('hideModal');
    assert.equal(controller.get('isShowingModal'), false);
});

test('hide modal and go back to friends/list', function(assert) {
    const stub = this.stub(controller, 'transitionToRoute');
    controller.send('goBack');
    assert.equal(controller.get('isShowingModal'), false);
    assert.equal(stub.calledWith('friends.list'), true);
});
