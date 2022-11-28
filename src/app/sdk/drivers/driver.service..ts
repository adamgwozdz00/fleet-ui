import {DriverDTO} from "./driver.dto";
import {InjectionToken} from "@angular/core";

export interface DriverService {
  getAll(): Promise<DriverDTO[]>;
}

export const DRIVER_MOCK_SERVICE = new InjectionToken<DriverService>("mock data service");
