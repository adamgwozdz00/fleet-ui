import {DriversDTO} from "./driver.dto";

export interface DriversService {
  getAll(): Promise<DriversDTO>;
}

