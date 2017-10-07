import Ember from 'ember';

export default Ember.Controller.extend({
    isShowingSuccessModal: false,
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
        save(changeset) {
            return changeset.save().then(() => {
                this.send('showSuccessModal');
            });
        },
    }
});
