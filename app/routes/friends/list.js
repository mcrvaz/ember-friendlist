import Ember from 'ember';

export default Ember.Route.extend({
    queryParams:{
        name: { refreshModel:true }
    },
    model(params) {
        return this.get('store').query('friend', params);
    }
});
