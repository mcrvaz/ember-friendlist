import Ember from 'ember';
import DS from 'ember-data';
import moment from 'moment';

const attr = DS.attr;

export default DS.Model.extend({
    name: attr("string"),
    lastname: attr("string"),
    friendsSince: attr("string", { defaultValue: moment().utc().toISOString() }),
    fullName: Ember.computed('name', 'lastname', function() {
        return `${this.get('name')} ${this.get('lastname')}`;
    })
});
