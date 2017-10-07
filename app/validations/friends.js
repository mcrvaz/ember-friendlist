import { validatePresence, validateLength } from "ember-changeset-validations/validators";
import dateMonthValidator from '../validators/date-month-validator';

export default {
    name: [
        validatePresence({presence: true, message: 'Nome deve ser preenchido.'}), 
        validateLength({min: 3, message: 'Nome deve conter pelo menos 3 caracteres.'})
    ],
    lastname: [
        validatePresence({presence: true, message: 'Sobrenome deve ser preenchido.'}), 
        validateLength({min: 3, message: 'Sobrenome deve conter pelo menos 3 caracteres.'})
    ],
    friendsSince: [
        validatePresence({presence: true, message: 'Data deve ser preenchida.'}),
        dateMonthValidator({presence: true}),
    ]
}