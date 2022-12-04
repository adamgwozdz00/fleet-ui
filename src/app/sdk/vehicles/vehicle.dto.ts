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
