import {Injectable} from "@angular/core";


@Injectable({providedIn: 'root'})
export class AuthUserSessionStorageService {

  constructor() {
  }

  persist(record: AuthUserSessionRecord): void {
    localStorage.setItem('apiToken', record.apiToken);
    localStorage.setItem('expiresIn', record.apiToken);
  }

  load(): AuthUserSessionRecord {
    return new AuthUserSessionRecord(
      localStorage.getItem('apiToken'),
    Number(localStorage.getItem('expiresIn'))
    );
  }

  clear() {
    localStorage.clear();
  }

}

export class AuthUserSessionRecord {
  apiToken: string;
  expiresIn : number

  constructor(apiToken: string, expiresIn : number) {
    this.apiToken = apiToken;
    this.expiresIn = expiresIn;
  }

  isProper() {
    return !this.isUnproper();
  }

  private isUnproper(): boolean {
    return this.apiToken == undefined || this.tokenExpired();
  }

  private tokenExpired(){
    return new Date().getTime() >= this.expiresIn;
  }
}
