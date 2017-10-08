import Ember from 'ember';

const CHEVRON_UP = "chevron-up"
const CHEVRON_DOWN = "chevron-down";
const ASC = "asc";
const DESC = "desc";
export default Ember.Component.extend({
    ordering: ASC,
    icon: Ember.computed('ordering', function() {
        return this.get('ordering') === ASC ? CHEVRON_UP:CHEVRON_DOWN;
    }),
    attr: null,
    actions: {
        getOppositeOrdering(ordering) {
            return ordering === ASC ? DESC:ASC;
        },
        sortBy() {
            const newOrdering = this.get('actions').getOppositeOrdering(this.get('ordering'));
            const attr = this.get('attr');
            this.set('ordering', newOrdering);
            this.attrs.sortBy([`${attr}:${newOrdering}`]);
        }
    }
});
