import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";


export function passwordStrengthValidator(minLength: number = 8): ValidatorFn{
    return (control:AbstractControl) : ValidationErrors | null => {
        const value = control.value;


        if(!value){
            return null;
        }

        const hasLetters = /[a-zA-Z]+/.test(value);

        const hasNumeric = /[0-9]+/.test(value);

        const hasSymbols = /[!@#$%^&*()_+\-=\[\]{}|;':",./<>?]+/.test(value);
        const isLengthValid = value.length <= minLength;


        return {
            hasLetters,
            hasNumeric,
            hasSymbols,
            isLengthValid
        }
    }
}