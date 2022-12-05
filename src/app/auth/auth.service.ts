import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {loginApiUrl} from '../http/api-url';
import {AuthCredentials} from './auth-credentials';
import {LoginResultTokenDTO} from './login-token.dto';
import {FleetRoutes} from "../common/routes/FleetRoutes";
import {
  AuthUserSessionRecord,
  AuthUserSessionStorageService
} from "./auth-user-session-storage.service";
import {UserRoleStorage} from "./user-role.storage";


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private readonly http: HttpClient,
    private readonly router: Router,
    private readonly authUserSessionStorageService: AuthUserSessionStorageService,
    private readonly userRoleStorage: UserRoleStorage
  ) {
  }

  async login(credentials: AuthCredentials) {
    const loginResult = await this.sendCredentials(credentials);

    if (!loginResult.success) {
      this.router.navigateByUrl(FleetRoutes.LOGIN);
    }

    this.persist(loginResult);
    this.userRoleStorage.getOrRequest();

    this.router.navigate([FleetRoutes.VEHICLES]);
  }

  logout() {
    this.authUserSessionStorageService.clear();
    this.userRoleStorage.clear();
    this.router.navigate([FleetRoutes.LOGIN]);
  }

  getAuthorizationToken(): string {
    const authUserData = this.authUserSessionStorageService.load();
    return `Bearer ${authUserData.apiToken}`;
  }

  isAuthenticated() {
    const authUserData = this.authUserSessionStorageService.load();
    if (!authUserData) {
      return false;
    }
    return authUserData.isProper();
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

  private persist(loginResult: LoginResultTokenDTO) {
    this.authUserSessionStorageService.persist(new AuthUserSessionRecord(
      loginResult.token)
    );
  }
}
