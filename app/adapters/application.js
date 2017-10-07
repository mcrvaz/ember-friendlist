import Ember from 'ember';
import RESTAdapter from 'ember-data/adapters/rest';

export default RESTAdapter.extend({
    primaryKey: '_id',
    host: 'https://ember-interview.herokuapp.com',
    headers: Ember.computed(function() {
        let currentPath = Ember.getOwner(this).lookup('controller:application').currentPath;
        if(currentPath == 'friends.edit') {
            return {'friend-edit': true};
        }
    }).volatile()
});