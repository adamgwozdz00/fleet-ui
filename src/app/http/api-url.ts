export class ApiUrl {
  constructor(public url: string) {}
}

export const loginApiUrl = new ApiUrl('http://localhost:8080/login');
