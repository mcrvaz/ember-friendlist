import Ember from 'ember';
import FriendValidations from '../../validations/friends';
import moment from 'moment';

export default Ember.Component.extend({
    FriendValidations,
    didReceiveAttrs() {
        this._super(...arguments);
        let model = this.get('model');
        model.set('friendsSince', moment().toDate());
    },
    validationErrors: [],
    previousMonth: moment().subtract(1, 'months').format("DD-MM-YYYY"),
    nextMonth: moment().add(1, 'months').format("DD-MM-YYYY"),
    actions: {
        save(changeset) {
            var self = this;
            changeset.validate().then(function() {
                if(changeset.get("isValid")) {
                    changeset.set('friendsSince', moment(changeset.get('friendsSince')).format("YYYY-MM-DD"));
                    self.attrs.save(changeset);
                } else {
                    self.set('validationErrors', changeset.get('errors').map((e) => e.validation));
                }
            });
        },
    }
});
