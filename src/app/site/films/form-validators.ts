import { AbstractControl, ValidatorFn } from '@angular/forms';

export class FormValidators {

    static integerBetween(min: number, max: number): ValidatorFn {

        return (c: AbstractControl) => {

            if (!Number.isInteger(c.value)) {
                return {
                    integer: {
                        valid: false
                    }
                }
            }
            else if ((c.value < min) || (c.value > max)) {
                return {
                    limit: {
                        valid: false
                    }
                };
            }
            return null;

        };

    };

}
