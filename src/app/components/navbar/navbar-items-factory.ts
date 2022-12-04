import {NavbarItem} from "./navbar-item";
import {UsersHttpService} from "../../sdk/users/users-http.service";
import {Injectable} from "@angular/core";

@Injectable({providedIn: 'root'})
export class NavbarItemsFactory {

  constructor(private readonly usersService: UsersHttpService) {
  }

  create(): Promise<NavbarItem[]> {

    return this.usersService.getUserData().then(data => data.routes.map(route => {
      const title = route[0].toUpperCase() + route.slice(1)
      return new NavbarItem(title, route)
    }))
  }
}
