import Ember from 'ember';
import moment from 'moment';

export default Ember.Controller.extend({
    actions: {
        save(changeset) {
            return changeset.save().then((e) => {console.log("change set saved", changeset)} );
        },
    }
});
