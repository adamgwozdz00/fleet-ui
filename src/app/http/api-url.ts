export class ApiUrl {
  constructor(public url: string) {
  }
}

export const loginApiUrl = new ApiUrl('http://localhost:8080/login');
export const vehiclesApiUrl = new ApiUrl('http://localhost:8080/vehicles')
export const vehiclesDriverHistoryApiUrl = (vehicleId: string) => new ApiUrl('http://localhost:8080/vehicles/detalis/drivers/' + vehicleId)
export const vehiclesOverviewsHistoryApiUrl = (vehicleId: string) => new ApiUrl('http://localhost:8080/vehicles/detalis/overviews/' + vehicleId)
export const vehiclesInsuranceHistoryApiUrl = (vehicleId: string) => new ApiUrl('http://localhost:8080/vehicles/detalis/insurances/' + vehicleId)
