import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('back-button', 'Integration | Component | back button', {
    integration: true
});

test('it renders', function(assert) {
    this.render(hbs`{{back-button}}`);
    assert.equal(this.$().text().trim(), 'Voltar');
});
