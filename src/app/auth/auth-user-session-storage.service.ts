import {Injectable} from "@angular/core";
import {AccountType} from "../common/account-type/account-type";


@Injectable({providedIn: 'root'})
export class AuthUserSessionStorageService {
  store(record: AuthUserSessionRecord): void {
    sessionStorage.setItem('accountType', record.accountType);
    sessionStorage.setItem('apiToken', record.apiToken);
  }

  load(): AuthUserSessionRecord {
    return new AuthUserSessionRecord(
      AccountType[sessionStorage.getItem('accountType')?.toUpperCase()],
      sessionStorage.getItem('apiToken')
    );
  }

  getAccountType(): AccountType {
    return this.load()?.accountType;
  }

  clear() {
    sessionStorage.clear();
  }

}

export class AuthUserSessionRecord {
  accountType: AccountType;
  apiToken: string;


  constructor(accountType: AccountType, apiToken: string) {
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
