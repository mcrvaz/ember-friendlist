import Ember from 'ember';
import DS from "ember-data";

export default DS.RESTSerializer.extend({
    primaryKey: '_id',
    normalizeResponse(store, primaryModelClass, payload, id, requestType) {
        var modelName = primaryModelClass.modelName;
        payload = {
            [modelName]: payload
        };
        return this._super(store, primaryModelClass, payload, id, requestType);
    },
});
