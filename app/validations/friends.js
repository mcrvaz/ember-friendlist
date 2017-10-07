import { validatePresence, validateLength } from "ember-changeset-validations/validators";
import dateMonthValidator from '../validators/date-month-validator';
import ValidationMessages from '../validators/messages';

export default {
    name: [
        validatePresence({presence: true, message: ValidationMessages.NAME_REQUIRED}), 
        validateLength({min: 3, message: ValidationMessages.NAME_LENGTH}),
    ],
    lastname: [
        validatePresence({presence: true, message: ValidationMessages.LAST_NAME_REQUIRED}), 
        validateLength({min: 3, message: ValidationMessages.LAST_NAME_LENGTH})
    ],
    friendsSince: [
        validatePresence({presence: true, message: ValidationMessages.FRIENDS_SINCE_REQUIRED}),
        dateMonthValidator({presence: true}),
    ]
}