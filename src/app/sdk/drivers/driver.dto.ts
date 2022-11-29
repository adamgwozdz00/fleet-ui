export interface DriversDTO {
  readonly drivers: DriverDTO[]
}

export interface DriverDTO {
  readonly id: number;
  readonly lastName: string;
  readonly firstName: string;
  readonly seniority: number;
  readonly title: string;
}
