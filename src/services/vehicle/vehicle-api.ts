import { api } from '../api'
import { GetVehicleMakesResponse, VehicleData } from './types'

const getVehicleMakes = async (): Promise<GetVehicleMakesResponse> => {
  try {
    const { data } = await api.get('/GetMakesForVehicleType/car?format=json')

    return data
  } catch (error) {
    console.log(error)
    throw error
  }
}

const getVehicleData = async ({
  makeId,
  year,
}: {
  makeId: number
  year: number
}): Promise<VehicleData> => {
  try {
    const { data } = await api.get(
      `/GetModelsForMakeIdYear/makeId/${makeId}/modelyear/${year}?format=json`,
    )

    return data
  } catch (error) {
    console.log(error)
    throw error
  }
}

export const vehicleApi = {
  getVehicleMakes,
  getVehicleData,
}
