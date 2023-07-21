import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { confirmPasswordValidator } from 'src/app/validators/confirm-password.validator';
import { passwordStrengthValidator } from 'src/app/validators/password-strength.validator';

@Component({
  selector: 'app-password-input',
  templateUrl: './password-input.component.html',
  styleUrls: ['./password-input.component.scss']
})
export class PasswordInputComponent {

  @Output() passwordValidationResults = new EventEmitter<any>();
  signUp: FormGroup;
  
  hide = true;
  hideConfirm = true;
  get emailInput() { return this.signUp.get('email'); }
  get passwordInput() { return this.signUp.get('password'); }  

  constructor(private fb: FormBuilder){
    this.signUp = this.fb.group({
      username: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, passwordStrengthValidator(8)]),
      confirmPassword: new FormControl('', [Validators.required, confirmPasswordValidator('password')])
    })

    this.signUp.get('password')?.valueChanges.subscribe(() => {
      this.emitPasswordValidationResults();
    });
  }
  emitPasswordValidationResults() {
    const passwordControl = this.signUp.get('password');
    if (passwordControl?.errors) {
      this.passwordValidationResults.emit(passwordControl.errors);
    }else{
      this.passwordValidationResults.emit(null);
    }
  }
}
