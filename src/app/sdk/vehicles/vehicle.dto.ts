export interface VehiclesDTO {
  readonly vehicles: VehicleDTO[]
}

export interface VehicleDTO {
  readonly fuelType: string,
  readonly kilometers: 0,
  readonly make: string,
  readonly model: string,
  readonly productionYear: 0,
  readonly vehicleId: string,
  readonly vinNumber: string

}

export interface CreateVehicleDTO {
  fuelType: string,
  make: string,
  model: string,
  productionYear: number,
  vinNumber: string
}

export interface UpdateInsuranceDTO {
  vehicleId: string,
  data: {
    cost: number,
    expirationDate: Date,
    insuranceTitle: string
  }
}

export interface UpdateOverviewDTO {
  vehicleId: string,
  data: {
    cost: number,
    description: string,
    expirationDate: Date,
    overviewTitle: string
  }

}

export interface UpdateVehicleStateDTO {
  vehicleId: string,
  data: {
    driverId: number,
    kilometers: number,
    liters: number,
    time: Date
  }
}

export interface RefuelDTO {
  vehicleId: string,
  data: {
    cost: number,
    liters: number,
  }
}
