import Ember from 'ember';

export default Ember.Route.extend({
    model: function(id) {
        return this.get('store').findRecord('friend', id);
    }
});
