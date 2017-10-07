import Ember from 'ember';
import moment from 'moment';

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
            return changeset.save().then((e) => {
                this.send('toggleSuccessModal');
            });
        },
    }
});
