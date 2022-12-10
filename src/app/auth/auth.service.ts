import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {AuthCredentials} from './auth-credentials';
import {AuthResultDTO} from './auth-result.dto';
import {FleetRoutes} from "../common/routes/FleetRoutes";
import {
  AuthUserSessionRecord,
  AuthUserSessionStorageService
} from "./auth-user-session-storage.service";
import {UserRoleStorage} from "./user-role.storage";
import {Router} from "@angular/router";


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

    if (!loginResult.token) {

      this.router.navigateByUrl(FleetRoutes.LOGIN);
      return;
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
  ): Promise<AuthResultDTO> {
    return this.http
    .post<AuthResultDTO>("login", {
      username: credentials.getUsername,
      password: credentials.getPassword,
    })
    .toPromise();
  }

  private persist(loginResult: AuthResultDTO) {
    this.authUserSessionStorageService.persist(new AuthUserSessionRecord(
      loginResult.token, loginResult.expiresIn)
    );
  }

  private isResultValid(authResult: AuthUserSessionRecord) {
    return authResult.expiresIn > new Date().getTime();

  }
}
