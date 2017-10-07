import RESTAdapter from 'ember-data/adapters/rest';

export default RESTAdapter.extend({
    primaryKey: '_id',
    host: 'https://ember-interview.herokuapp.com',
    // headers: {
    //     'friend-edit': true
    // }
});