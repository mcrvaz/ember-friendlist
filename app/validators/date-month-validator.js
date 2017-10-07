import moment from 'moment';

export default function validateDateMonthValidator(options = {}) {
    //validates if current date is between the previous month and the next month
    return (key, newValue, oldValue, changes, content) => {
        let currentValue = moment(newValue);
        let previousMonth = moment().subtract(1, 'months').subtract(1, 'days');
        let nextMonth = moment().add(1, 'months');
        let message = options.message ? options.message : `Data deve estar entre ${previousMonth.format("DD/MM/YYYY")} e ${nextMonth.format("DD/MM/YYYY")}`;
        return currentValue.isBetween(previousMonth, nextMonth) || message;
    };
}
