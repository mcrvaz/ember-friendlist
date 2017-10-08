import Ember from 'ember';
import moment from 'moment';
import FriendValidations from '../../validations/friends';

export default Ember.Component.extend({
    FriendValidations,
    didReceiveAttrs() {
        this._super(...arguments);
        let model = this.get('model');
        model.set('friendsSince', moment(model.get('friendsSince')).toDate());
    },
    isShowingConfirmModal: false,
    previousMonth: moment().subtract(1, 'months').format("DD-MM-YYYY"),
    nextMonth: moment().add(1, 'months').format("DD-MM-YYYY"),
    actions: {
        hideConfirmModal() {
            this.set('isShowingConfirmModal', false);
        },
        showConfirmModal() {
            this.set('isShowingConfirmModal', true);
        },
        confirmSave() {
            this.send('showConfirmModal');  
        },
        save(changeset) {
            var self = this;
            this.send('hideConfirmModal');
            changeset.validate().then(function() {
                if(changeset.get("isValid")) {
                    changeset.set('friendsSince', moment(changeset.get('friendsSince')).format("YYYY-MM-DD"));
                    self.attrs.save(changeset);
                }
            });
        },
        rollback(changeset) {
            changeset.rollback();
            this.send('hideConfirmModal');
        }
    }
});
