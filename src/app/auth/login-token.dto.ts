export class LoginResultTokenDTO {
  constructor(public success: boolean, public token: string) {}
  
  isFail(): boolean {
    return !this.success;
  }
}
