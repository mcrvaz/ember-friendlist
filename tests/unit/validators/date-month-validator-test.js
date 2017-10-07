import { module, test } from 'qunit';
import validateDateMonthValidator from 'ember-friendlist/validators/date-month-validator';

module('Unit | Validator | date-month-validator');

test('it exists', function(assert) {
  assert.ok(validateDateMonthValidator());
});
