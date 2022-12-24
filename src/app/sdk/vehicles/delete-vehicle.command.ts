import {DeletionCommand} from "../../common/deletion-sidebar/deletion.command";
import {VehicleHttpService} from "./vehicle-http.service";

export class DeleteVehicleCommand implements DeletionCommand {
  constructor(private readonly service: VehicleHttpService,
              private readonly vehicleId: string) {
  }

  delete(): Promise<any> {
    return this.service.delete(this.vehicleId);
  }

}
