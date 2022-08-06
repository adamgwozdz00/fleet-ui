import { Injectable } from '@angular/core';
import { UserPagesDTO } from './user-pages.dto';


@Injectable({
  providedIn: 'root',
})
export class UsersProductMockService {
  constructor() {}

  async getPages() : Promise<UserPagesDTO[]>{
    const accountType = sessionStorage.getItem('accountType');
    if(accountType == 'user'){
      return [new UserPagesDTO('Fleet'),
      new UserPagesDTO('Reports'),
      new UserPagesDTO('Drivers'),
      new UserPagesDTO('Account')];
    }

    return [new UserPagesDTO('Fleet'),
    new UserPagesDTO('Reports'),
    new UserPagesDTO('Drivers'),
    new UserPagesDTO('People'),
    new UserPagesDTO('Account')]
  }
}
