import { FormattedVehicleMake, Vehicle } from './types'
import { vehicleApi } from './vehicle-api'

const getMakes = async (): Promise<FormattedVehicleMake[]> => {
  try {
    const response = await vehicleApi.getVehicleMakes()

    const makes = response.Results.map((make) => {
      return {
        value: make.MakeId,
        label: make.MakeName,
      }
    })

    return makes
  } catch (error) {
    console.log(error)
    throw error
  }
}

const getVehicles = async ({
  makeId,
  year,
}: {
  makeId: number
  year: number
}): Promise<Vehicle[]> => {
  try {
    const response = await vehicleApi.getVehicleData({ makeId, year })

    const vehicles = response.Results.map((vehicle) => {
      return {
        Make_ID: vehicle.Make_ID,
        Make_Name: vehicle.Make_Name,
        Model_ID: vehicle.Model_ID,
        Model_Name: vehicle.Model_Name,
      }
    })

    return vehicles
  } catch (error) {
    console.log(error)
    throw error
  }
}

export const vehicleService = {
  getMakes,
  getVehicles,
}
