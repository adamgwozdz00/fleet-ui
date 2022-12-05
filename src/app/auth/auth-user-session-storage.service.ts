import {Injectable} from "@angular/core";


@Injectable({providedIn: 'root'})
export class AuthUserSessionStorageService {

  constructor() {
  }

  persist(record: AuthUserSessionRecord): void {
    localStorage.setItem('apiToken', record.apiToken);

  }

  load(): AuthUserSessionRecord {
    return new AuthUserSessionRecord(
      localStorage.getItem('apiToken')
    );
  }

  clear() {
    localStorage.clear();
  }

}

export class AuthUserSessionRecord {
  apiToken: string;


  constructor(apiToken: string) {
    this.apiToken = apiToken;
  }

  isProper() {
    return !this.isUnproper();
  }

  private isUnproper(): boolean {
    return this.apiToken == undefined
  }
}
