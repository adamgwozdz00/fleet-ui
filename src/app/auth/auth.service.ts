import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { loginApiUrl } from '../http/api-url';
import { AuthCredentials } from './auth-credentials';
import { LoginResultTokenDTO } from './login-token.dto';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private readonly http: HttpClient,
    private readonly router: Router
  ) {}

  async login(credentials: AuthCredentials) {
    const loginResult = await this.sendCredentials(credentials);

    if (!loginResult.success) {
      this.router.navigateByUrl('/login');
    }
    this.storeAccountType(credentials);
    sessionStorage.setItem('apiToken', loginResult.token);
    this.router.navigate(['/fleet']);
  }

  logout() {
    sessionStorage.setItem('apiToken', '');
    sessionStorage.setItem('accountType', '');
    this.router.navigate(['/login']);
  }

  getAuthorizationToken(): string {
    const token = sessionStorage.getItem('apiToken');
    return `Bearer ${token}`;
  }

  isAuthenticated() {
    if (!sessionStorage.getItem('apiToken')) {
      return false;
    }
    if (sessionStorage.getItem('apiToken') == '') {
      return false;
    }
    return true;
  }

  getAccountType(): string {
    return sessionStorage.getItem('accountType');
  }

  private sendCredentials(
    credentials: AuthCredentials
  ): Promise<LoginResultTokenDTO> {
    return this.http
      .post<LoginResultTokenDTO>(loginApiUrl.url, {
        username: credentials.getUsername,
        password: credentials.getPassword,
      })
      .toPromise();
  }

  private storeAccountType(credentials: AuthCredentials) {
    if (credentials.getUsername.includes('admin')) {
      sessionStorage.setItem('accountType', 'admin');
      return;
    }
    sessionStorage.setItem('accountType', 'user');
  }
}
