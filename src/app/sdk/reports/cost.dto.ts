export interface CostDTO {
  fuelCost: {
    cost: number
  },
  insuranceCost: {
    cost: number
  },
  overviewCost: {
    cost: number
  },

  repairCost: {
    cost: number
  },

  totalCost: {
    cost: number
  }
}

export interface YearlyCostDTO {
  year: number,
  cost: CostDTO
}
