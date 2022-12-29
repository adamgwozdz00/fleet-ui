export interface RefuelsDetailsDTO {
  readonly refuelDetails: RefuelDetailsDTO[]
}

export interface RefuelDetailsDTO {
  readonly cost: number,
  readonly liters: number,
}
