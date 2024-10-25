export interface VehicleMake {
  MakeId: number
  MakeName: string
  VehicleTypeId: number
  VehicleTypeName: string
}

export interface GetVehicleMakesResponse {
  Count: number
  Message: string
  SearchCriteria: string
  Results: VehicleMake[]
}

export interface FormattedVehicleMake {
  value: number
  label: string
}

export interface Vehicle {
  Make_ID: number
  Make_Name: string
  Model_ID: number
  Model_Name: string
}

export interface VehicleData {
  Count: number
  Message: string
  SearchCriteria: string
  Results: Vehicle[]
}
