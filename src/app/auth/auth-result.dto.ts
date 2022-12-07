export class AuthResultDTO {
  constructor(public token: string, public role: string, public expiresIn : number) {
  }

}
