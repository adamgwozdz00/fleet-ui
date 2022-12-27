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


export interface DriverHistoryDTO {
  history: HistoryDTO[]
}

export interface HistoryDTO {
  kilometers: number,
  liters: number,
  time: Date,
  vehicleId: string,
  vehicleMake: string,
  vehicleModel: string
}

export interface CreateDriverDTO {
  firstName: string,
  lastName: string,
  seniorityInYears: number
}

export interface DriverResponse {
  failureReason: string,
  success: boolean
}

export enum SeniorityOperation {
  INCREMENT = "INCREMENT", DECREMENT = "DECREMENT", PROMOTION = "PROMOTION"
}

export interface UpdateDriverDTO {
  readonly driverId: number,
  readonly operation: SeniorityOperation

  readonly seniority?: number

}
