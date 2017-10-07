import Ember from 'ember';
import moment from 'moment';

export default Ember.Controller.extend({
    actions: {
        update(id) {
            let name = this.get('model.name');
            let lastname = this.get('model.lastname');
            let friendsSince = moment(this.get('model.friendsSince')).format("YYYY-MM-DD");
            return this.get('store').findRecord('friend', id).then(function(f) {
                f.set('name', name);
                f.set('lastname', lastname);
                f.set('friendsSince', friendsSince);
                f.save();
            });
        }
    }
});
