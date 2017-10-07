import Ember from 'ember';
import moment from 'moment';
import FriendValidations from '../../validations/friends';

export default Ember.Component.extend({
    FriendValidations,
    isShowingConfirmModal: false,
    
    previousMonth: moment().subtract(1, 'months').format("DD/MM/YYYY"),
    nextMonth: moment().add(1, 'months').format("DD/MM/YYYY"),
    actions: {
        toggleConfirmModal() {
            this.toggleProperty('isShowingConfirmModal');
        },
        confirmSave() {
            this.send('toggleConfirmModal');  
        },
        save(changeset) {
            var self = this;
            changeset.validate().then(function() {
                if(changeset.get("isValid")) {
                    changeset.set('friendsSince', moment(changeset.friendsSince).format("YYYY-MM-DD"));
                    self.attrs.save(changeset);
                }
                self.set('showErrors', true);
            });
        },
        rollback(changeset) {
            changeset.rollback();
            this.send('toggleConfirmModal');
        }
    }
});
