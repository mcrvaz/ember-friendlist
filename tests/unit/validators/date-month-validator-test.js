import { module, test } from 'qunit';
import validateDateMonthValidator from 'ember-friendlist/validators/date-month-validator';
import moment from 'moment';

module('Unit | Validator | date-month-validator');
const previousMonth = moment().subtract(1, 'months');
const nextMonth = moment().add(1, 'months');

test('value between previousMonth and nextMonth', function(assert) {
    let result = validateDateMonthValidator()('key', moment());
    assert.equal(result, true);
});

test('value before previousMonth', function(assert) {
    let result = validateDateMonthValidator()('key', moment().subtract(1, 'months').subtract(1, 'days'));
    assert.equal(result, `Data deve estar entre ${previousMonth.format('DD/MM/YYYY')} e ${nextMonth.format('DD/MM/YYYY')}`);
});

test('value after nextMonth', function(assert) {
    let result = validateDateMonthValidator()('key', moment().add(1, 'months').add(1, 'days'));
    assert.equal(result, `Data deve estar entre ${previousMonth.format('DD/MM/YYYY')} e ${nextMonth.format('DD/MM/YYYY')}`);
});
