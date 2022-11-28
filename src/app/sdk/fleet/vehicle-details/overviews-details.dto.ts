export interface OverviewsDetailsDTO {
  readonly overviewDetails: OverviewDetailsDTO[]
}

export interface OverviewDetailsDTO {
  readonly id: number,
  readonly expirationDate: string,
  readonly overviewName: string,
  readonly overviewCost: number,
  readonly overviewDescription: string
}
