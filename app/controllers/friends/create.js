import Ember from 'ember';
import moment from 'moment';

export default Ember.Controller.extend({
    actions: {
        create() {
            let friend = this.get('store').createRecord('friend', {
                name: this.get('name'),
                lastname: this.get('lastname'),
                friendsSince: moment(this.get('friendsSince')).format("YYYY-MM-DD")
            });
            return friend.save();
        }
    }
});
