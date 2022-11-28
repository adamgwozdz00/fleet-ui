export interface DriversDetailsDTO {
  readonly driverDetails: DriverDetailsDTO[],
}

export interface DriverDetailsDTO {
  readonly id: number,
  readonly kilometers: number,
  readonly lastName: string,
  readonly time: string,
}
