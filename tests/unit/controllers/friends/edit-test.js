import { moduleFor } from 'ember-qunit';
import test from 'ember-sinon-qunit/test-support/test';
import wait from 'ember-test-helpers/wait';
import Changeset from 'ember-changeset';

var controller;
moduleFor('controller:friends/edit', 'Unit | Controller | friends/edit', {
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
    controller.send('showSuccessModal');
    assert.equal(controller.get('isShowingSuccessModal'), true);
});

test('hides modal', function(assert) {
    controller.send('hideSuccessModal');
    assert.equal(controller.get('isShowingSuccessModal'), false);
});

test('hide modal and go back to friends/list', function(assert) {
    const stub = this.stub(controller, 'transitionToRoute');
    controller.send('goBack');
    assert.equal(controller.get('isShowingSuccessModal'), false);
    assert.equal(stub.calledWith('friends.list'), true);
});
