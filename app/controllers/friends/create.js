import Ember from 'ember';

export default Ember.Controller.extend({
    isShowingModal: false,
    actions: {
        goBack() {
            this.send('toggleModal');
            this.transitionToRoute('friends.list'); 
        },
        toggleModal() {
            this.toggleProperty('isShowingModal');
        },
        save(changeset) {
            return changeset.save().then(() => {
                this.send('toggleModal');     
            });
        },
    }
});
