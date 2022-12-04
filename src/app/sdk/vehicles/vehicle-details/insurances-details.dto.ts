export interface InsurancesDetailsDTO {
  readonly insuranceDetails: InsuranceDetailsDTO[]
}

export interface InsuranceDetailsDTO {
  readonly  id: number,
  readonly insuranceCost: number,
  readonly expirationDate: string,
  readonly insuranceName: string
}
