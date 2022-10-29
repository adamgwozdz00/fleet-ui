export class LoginResultTokenDTO {
  constructor(public success: boolean, public token: string, public role : string) {
  }

  isFail(): boolean {
    return !this.success;
  }
}
