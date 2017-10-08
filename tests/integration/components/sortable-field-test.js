import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('sortable-field', 'Integration | Component | sortable field', {
    integration: true
});

test('should return fullName:desc when clicked', function(assert) {
    const expected = [`fullName:desc`];
    this.set('sortBy', (actual) => {
        assert.deepEqual(actual, expected);
    });
    this.render(hbs`{{sortable-field attr="fullName" sortBy=(action sortBy)}}`);
    this.$('div').click();
});

test('should return fullName:asc when clicked twice', function(assert) {
    const expected = [`fullName:asc`];
    let clicked = false;
    this.set('sortBy', (actual) => {
        if(!clicked) return clicked = true;
        assert.deepEqual(actual, expected);
    });
    this.render(hbs`{{sortable-field attr="fullName" sortBy=(action sortBy)}}`);
    this.$('div').click();
    this.$('div').click();
});

test('icon should be chveron-down by default', function(assert) {
    const expected = "fa fa-chevron-down icon";
    this.set('sortBy', (actual) => {});
    this.render(hbs`{{sortable-field attr="fullName" sortBy=(action sortBy)}}`);
    assert.equal(this.$('i').attr('class'), expected);
});

test('icon should be chveron-up when clicked', function(assert) {
    const expected = "fa fa-chevron-up icon";
    this.set('sortBy', (actual) => {});
    this.render(hbs`{{sortable-field attr="fullName" sortBy=(action sortBy)}}`);
    this.$('div').click();
    assert.equal(this.$('i').attr('class'), expected);
});
