import Ember from 'ember';

export default Ember.Controller.extend({
    isShowingModal: false,
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
        save(changeset) {
            return changeset.save().then(() => {
                this.send('showModal');     
            });
        },
    }
});
