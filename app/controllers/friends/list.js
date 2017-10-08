import Ember from 'ember';

export default Ember.Controller.extend({
    sorting: ['fullName:asc'],
    sortedContent: Ember.computed.sort('model', 'sorting'),
    actions: {
        sortBy(sorting) {
            this.set('sorting', sorting);
        }
    }
});
