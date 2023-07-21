import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-password-hints',
  templateUrl: './password-hints.component.html',
  styleUrls: ['./password-hints.component.scss']
})
export class PasswordHintsComponent {
  @Input() passwordValidity: any;

  isPasswordWeak: boolean = false;
  isPasswordModerate: boolean = false;
  isPasswordStrong: boolean = false;
  isGoodLength: boolean = false;

  passwordHint = "Password hint"

  ngOnChanges() {
    this.updateSquareColors();
  }

  updateSquareColors() {
    const {hasLetters, hasNumeric, hasSymbols, isLengthValid } = this.passwordValidity || {};
    this.isPasswordWeak = (hasLetters && !hasNumeric && !hasSymbols) || (!hasLetters && hasNumeric && !hasSymbols) || (!hasLetters && !hasNumeric && hasSymbols);
    this.isPasswordModerate = (hasLetters && hasNumeric && !hasSymbols) || (hasLetters && !hasNumeric && hasSymbols) || (!hasLetters && hasNumeric && hasSymbols);
    this.isPasswordStrong = hasLetters && hasNumeric && hasSymbols;
    this.isGoodLength = isLengthValid;
    if(this.isPasswordWeak && !this.isGoodLength){
      this.passwordHint = "Your password is weak. We reccomend you to enhace it!"
    }else if(this.isPasswordModerate && !this.isGoodLength){
      this.passwordHint = "Your password is ok. It would be better if you enhace it!"
    }else if(this.isPasswordStrong && !this.isGoodLength){
      this.passwordHint = "Your password is good to go!"
    }else if(this.isGoodLength){
      this.passwordHint = "The password minimal length is 8 symbols"
    }
  }

}
