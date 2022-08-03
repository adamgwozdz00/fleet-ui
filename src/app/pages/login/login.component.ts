import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthCredentials, Password, Username } from 'src/app/auth/auth-credentials';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(
    private readonly authService: AuthService,
    private formBuilder: FormBuilder
  ) {}

  signInForm = this.formBuilder.group({
    username: [''],
    password: [''],
  });

  ngOnInit(): void {}

  onSignIn() {
    this.authService.login(this.prepareCredentials())
  }

  prepareCredentials(): AuthCredentials {
    const rawLoginForm = this.signInForm.getRawValue();
    return new AuthCredentials(new Username(rawLoginForm["username"]),new Password(rawLoginForm["password"]));
  }
}
