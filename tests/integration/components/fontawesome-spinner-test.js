import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('fontawesome-spinner', 'Integration | Component | fontawesome spinner', {
    integration: true
});

test('it renders', function(assert) {
    this.render(hbs`{{fontawesome-spinner}}`);
    assert.equal(this.$().text().trim(), '');
});
