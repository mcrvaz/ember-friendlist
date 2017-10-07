import Ember from 'ember';
import DS from "ember-data";

export default DS.RESTSerializer.extend({
    primaryKey: '_id',
    serializeIntoHash(hash, type, record, options) {
        Ember.merge(hash, this.serialize(record, options));
    },
    normalizeSaveResponse(store, primaryModelClass, payload, id, requestType) {
        let modelName = primaryModelClass.modelName;
        let payloadData = payload[modelName][modelName];
        payload = {
            [modelName]: payloadData
        };
        debugger;
        return this._super(store, primaryModelClass, payload, id, requestType);
    },
    normalizeResponse(store, primaryModelClass, payload, id, requestType) {
        let modelName = primaryModelClass.modelName;
        payload = {
            [modelName]: payload
        };
        return this._super(store, primaryModelClass, payload, id, requestType);
    },
});
