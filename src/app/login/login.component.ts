import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

  public formGroup = new FormGroup({
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
  });

  constructor(private router: Router,
              private authService: AuthService) {
    
  }

  ngOnInit() {
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
