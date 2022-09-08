export class CarHistoryDetailsDTO {
  constructor(
    public date: string,
    public driverId: string,
    public driverName: string,
    public issue: string = ""
  ) {}
}
