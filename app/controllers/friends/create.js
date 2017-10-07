import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        save(changeset) {
            return changeset.save().then((e) => {console.log("change set saved", changeset)} );
        },
    }
});
