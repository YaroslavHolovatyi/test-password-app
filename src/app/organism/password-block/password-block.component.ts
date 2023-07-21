import { Component } from '@angular/core';

@Component({
  selector: 'app-password-block',
  templateUrl: './password-block.component.html',
  styleUrls: ['./password-block.component.scss']
})
export class PasswordBlockComponent {
  passwordValidationResults:any;

  onPasswordValidationResults(results: any){
    this.passwordValidationResults = results;
  }

}
