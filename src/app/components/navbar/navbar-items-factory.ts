import {NavbarItem} from "./navbar-item";
import {UsersHttpService} from "../../sdk/users/users-http.service";
import {Injectable} from "@angular/core";

@Injectable({providedIn: 'root'})
export class NavbarItemsFactory {

  private static COMPARE = (x1 : {routeName : string, position: number},x2 : {routeName : string, position: number}) => x1.position > x2.position ? 1 : -1

  constructor(private readonly usersService: UsersHttpService) {
  }

  create(): Promise<NavbarItem[]> {

    return this.usersService.getUserRoutesAndCompanyName().then(data => data.routes.sort(NavbarItemsFactory.COMPARE).map(route => {
      const title = route.routeName[0].toUpperCase() + route.routeName.slice(1)
      return new NavbarItem(title, route.routeName)
    }))
  }
}
