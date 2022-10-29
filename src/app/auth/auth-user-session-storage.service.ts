import {Injectable} from "@angular/core";


@Injectable({providedIn: 'root'})
export class AuthUserSessionStorageService {
  store(record: AuthUserSessionRecord): void {
    sessionStorage.setItem('accountType', record.accountType);
    sessionStorage.setItem('apiToken', record.apiToken);
  }

  load(): AuthUserSessionRecord {
    return new AuthUserSessionRecord(
      sessionStorage.getItem('accountType'),
      sessionStorage.getItem('apiToken')
    );
  }

  clear() {
    sessionStorage.clear();
  }

}

export class AuthUserSessionRecord {
  accountType: string;
  apiToken: string;


  constructor(accountType: string, apiToken: string) {
    this.accountType = accountType;
    this.apiToken = apiToken;
  }

  isProper() {
    return !this.isUnproper();
  }

  private isUnproper(): boolean {
    return this.apiToken == undefined || this.accountType == undefined;
  }
}
