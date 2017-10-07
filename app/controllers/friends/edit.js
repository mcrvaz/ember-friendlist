import Ember from 'ember';

export default Ember.Controller.extend({
    isShowingSuccessModal: false,
    isShowingLoading: false,
    actions: {
        goBack() {
            this.send('hideSuccessModal');
            this.transitionToRoute('friends.list'); 
        },
        hideSuccessModal() {
            this.set('isShowingSuccessModal', false);
        },
        showSuccessModal() {
            this.set('isShowingSuccessModal', true);
        },
        hideLoading() {
            this.set('isShowingLoading', false);
        },
        showLoading() {
            this.set('isShowingLoading', true);
        },
        save(changeset) {
            this.send('showLoading');
            return changeset.save().then(() => {
                this.send('hideLoading');
                this.send('showSuccessModal');
            });
        },
    }
});
