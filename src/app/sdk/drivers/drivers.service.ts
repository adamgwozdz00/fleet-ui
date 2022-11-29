import {DriversDTO} from "./driver.dto";
import {InjectionToken} from "@angular/core";

export interface DriversService {
  getAll(): Promise<DriversDTO>;
}

export const DRIVERS_SERVICE = new InjectionToken<DriversService>("mock data service");
