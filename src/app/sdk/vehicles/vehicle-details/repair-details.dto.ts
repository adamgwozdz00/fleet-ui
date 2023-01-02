export interface RepairDetailsDTO {
  readonly repairDetails: RepairDetailsRecord[]
}

export interface RepairDetailsRecord {
  cost: number;
  finishTime: Date;
  serviceName: string;
  startTime: Date;

  title: string;
}
