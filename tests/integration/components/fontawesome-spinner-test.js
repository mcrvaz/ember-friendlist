import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('fontawesome-spinner', 'Integration | Component | fontawesome spinner', {
    integration: true
});

test('it renders', function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(hbs`{{fontawesome-spinner}}`);

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(hbs`
        {{#fontawesome-spinner}}
            template block text
        {{/fontawesome-spinner}}
    `);

    assert.equal(this.$().text().trim(), 'template block text');
});
