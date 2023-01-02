export interface CostDTO {
  fuelCostData: {
    cost: number
  },
  insuranceCostData: {
    cost: number
  },
  overviewCostData: {
    cost: number
  },

  repairCostData: {
    cost: number
  },

  totalCost: number
}

export interface YearlyCostDTO {
  year: number,
  cost: CostDTO
}
