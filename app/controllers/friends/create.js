import Ember from 'ember';

export default Ember.Controller.extend({
    isShowingModal: false,
    isShowingLoading: false,
    actions: {
        goBack() {
            this.send('hideModal');
            this.transitionToRoute('friends.list'); 
        },
        hideModal() {
            this.set('isShowingModal', false);
        },
        showModal() {
            this.set('isShowingModal', true);
        },
        hideLoading() {
            this.set('isShowingLoading', false);
        },
        showLoading() {
            this.set('isShowingLoading', true);
        },
        save(changeset) {
            this.send('showLoading');
            let friend = this.get('store').createRecord('friend', {
                name: changeset.get('name'),
                lastname: changeset.get('lastname'),
                friendsSince: changeset.get('friendsSince')
            });
            return friend.save().then(() => {
                this.send('hideLoading');
                this.send('showModal');         
            });
        },
    }
});
