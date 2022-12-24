import {DeletionCommand} from "../../common/deletion-sidebar/deletion.command";
import {UserDeletionService} from "./user-deletion.service";

export class DeleteUserCommand implements DeletionCommand {

  constructor(
    private readonly service: UserDeletionService,
    private readonly userId: number) {
  }

  delete(): Promise<any> {
    return this.service.deleteUser(this.userId);
  }

}
