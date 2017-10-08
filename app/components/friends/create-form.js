import Ember from 'ember';
import moment from 'moment';
import FriendValidations from '../../validations/friends';

export default Ember.Component.extend({
    FriendValidations,
    model: null,
    didReceiveAttrs() {
        this._super(...arguments);
        let model = this.get('model');
        model.set('friendsSince', moment().toDate());
    },
    previousMonth: moment().subtract(1, 'months').format("DD/MM/YYYY"),
    nextMonth: moment().add(1, 'months').format("DD/MM/YYYY"),
    actions: {
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
    }
});
