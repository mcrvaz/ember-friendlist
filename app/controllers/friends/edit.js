import Ember from 'ember';

export default Ember.Controller.extend({
    isShowingSuccessModal: false,
    actions: {
        goBack() {
            this.send('toggleConfirmModal');
            this.transitionToRoute('friends.list'); 
        },
        toggleSuccessModal() {
            this.toggleProperty('isShowingSuccessModal');
        },
        save(changeset) {
            return changeset.save().then(() => {
                this.send('toggleSuccessModal');
            });
        },
    }
});
