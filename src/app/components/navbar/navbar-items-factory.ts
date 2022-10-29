import {AccountType} from "../../common/account-type/account-type";
import {NavbarItem} from "./navbar-item";
import {FleetRoutes} from "../../common/routes/FleetRoutes";

export class NavbarItemsFactory {

  create(accountType: AccountType): NavbarItem[] {
    switch (accountType) {
      case AccountType.ADMIN:
        return [
          new NavbarItem("Vehicles", FleetRoutes.VEHICLES),
          new NavbarItem("Drivers", FleetRoutes.DRIVERS),
          new NavbarItem("Users", FleetRoutes.USERS),
          new NavbarItem("Account", FleetRoutes.ACCOUNT),
        ];
      case AccountType.USER:
        return [
          new NavbarItem("Vehicles", FleetRoutes.VEHICLES),
          new NavbarItem("Drivers", FleetRoutes.DRIVERS),
          new NavbarItem("Account", FleetRoutes.ACCOUNT),
        ];
    }
  }
}
