import Ember from 'ember';

const ASC = "asc";
const DESC = "desc";
export default Ember.Controller.extend({
    sorting: ['fullName:asc'],
    sortedContent: Ember.computed.sort('model', 'sorting'),
    actions: {
        sortBy(sorting) {
            this.set('sorting', sorting);
        }
    }
});
