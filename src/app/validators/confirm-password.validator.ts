import { ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';

export function confirmPasswordValidator(confirmControlName: string): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const password = control.value;
    const confirmControl = control.parent?.get(confirmControlName);

    if (!confirmControl) {
      return null;
    }

    const confirmPassword = confirmControl.value;

    if (password !== confirmPassword) {
      return { confirmPassword: true };
    }

    return null;
  };
}