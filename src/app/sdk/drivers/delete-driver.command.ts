import {DeletionCommand} from "../../common/deletion-sidebar/deletion.command";
import {DriversHttpService} from "./drivers-http.service";

export class DeleteDriverCommand implements DeletionCommand {

  constructor(private readonly service: DriversHttpService,
              private readonly driverId: number) {
  }

  delete(): Promise<any> {
    return this.service.delete(this.driverId);
  }

}
