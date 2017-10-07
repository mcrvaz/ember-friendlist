import Ember from 'ember';

export default Ember.Route.extend({
    model(params) {
        let id = params.friend_id;
        return this.get('store').findRecord('friend', id);
    }
});
