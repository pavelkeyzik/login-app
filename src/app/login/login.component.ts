import { Component } from '@angular/core';
import { FormControl, FormBuilder, Validators, FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';
import { PasswordValidation } from '../shared/validators/password-matches';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent {

  public formGroup;

  constructor(private router: Router,
              private authService: AuthService,
              fb: FormBuilder) {
    this.formGroup = fb.group({
      userName: new FormControl('', [
        Validators.required,
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.email,
      ]),
      password: new FormControl('', [
        Validators.required,
      ]),
      confirmPassword: new FormControl('', [
        Validators.required,
      ])
    }, {
      validator: PasswordValidation.MatchPassword
    })
  }

  public authorize() {
    let params = {
      userName: this.formGroup.get('userName').value,
      email: this.formGroup.get('email').value
    };

    this.authService.login(params);
    this.router.navigate(['/home-page']);
  }

}
