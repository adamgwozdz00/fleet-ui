export class AuthCredentials {
  constructor(public username: Username, public password: Password) {}

  get getUsername(): string {
    return this.username.username;
  }

  get getPassword(): string {
    return this.password.password;
  }
}

export class Username {
  constructor(public username: string) {}
}

export class Password {
  constructor(public password: string) {}
}
