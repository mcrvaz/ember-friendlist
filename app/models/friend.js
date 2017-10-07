import Ember from 'ember';
import DS from 'ember-data';

var attr = DS.attr;

export default DS.Model.extend({
    name: attr("string"),
    lastname: attr("string"),
    friendsSince: attr("string"),
    fullName: Ember.computed('name', 'lastname', function() {
        return `${this.get('name')} ${this.get('lastname')}`;
    })
});
