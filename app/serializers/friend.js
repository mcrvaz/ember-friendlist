import Ember from 'ember';
import DS from "ember-data";

export default DS.RESTSerializer.extend({
    primaryKey: '_id',
    serializeIntoHash(hash, type, record, options) {
        Ember.merge(hash, this.serialize(record, options));
    },
    normalizeFindRecordResponse(store, primaryModelClass, payload, id, requestType) {
        //{"_id":"","name":"","lastname":"","friendsSince":"","__v":""}
        let modelName = primaryModelClass.modelName;
        payload = { [modelName]: payload };
        return this._super(store, primaryModelClass, payload, id, requestType);
    },
    normalizeFindAllResponse(store, primaryModelClass, payload, id, requestType) {
        //[{"_id":"","name":"","lastname":"","friendsSince":"","__v":""}]
        let modelName = primaryModelClass.modelName;
        payload = { [modelName]: payload };
        return this._super(store, primaryModelClass, payload, id, requestType);
    },
    normalizeSaveResponse(store, primaryModelClass, payload, id, requestType) {
        //{"sucess":true,"friend":{"_id":"", "name":"","lastname":"","friendsSince":""}}
        let modelName = primaryModelClass.modelName;
        let payloadData = payload[modelName];
        payload = { [modelName]: payloadData };
        return this._super(store, primaryModelClass, payload, id, requestType);
    },
    normalizeUpdateRecordResponse(store, primaryModelClass, payload, id, requestType) {
        //{"sucess":true,"friend":{"name":"","lastname":"","friendsSince":""}}
        let modelName = primaryModelClass.modelName;
        payload[modelName][this.primaryKey] = id;
        return this._super(store, primaryModelClass, payload, id, requestType);
    },
});
