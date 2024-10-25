import { modelYearsOptions } from '@/data/years'
import { vehicleService } from '@/services/vehicle/vehicle-service'
import { VehiclesTable } from './vehicles-table'
import { Suspense } from 'react'
import { Vehicle } from '@/services/vehicle/types'

export async function generateStaticParams() {
  const vehicleData = await vehicleService.getMakes()
  const years = modelYearsOptions()

  return vehicleData.flatMap((vehicle) =>
    years.map((year: any) => ({
      params: {
        makeId: vehicle.value,
        year: year.value,
      },
    })),
  )
}

type Params = Promise<{ makeId: number; year: number }>

export default async function ResultPage({ params }: { params: Params }) {
  const { makeId, year } = await params

  const allVehiclesData = await vehicleService.getVehicles({ makeId, year })
  const vehicleData = allVehiclesData.reduce((acc: Vehicle[], vehicle) => {
    const existingVehicle = acc.find(
      (item) => item.Model_ID === vehicle.Model_ID,
    )
    if (!existingVehicle) {
      return [...acc, vehicle]
    } else {
      return acc
    }
  }, [])

  return (
    <div className="grid grid-rows-[20px_1fr] items-center justify-items-center gap-16 p-8 pb-20 sm:p-20">
      <h1 className="text-4xl font-semibold text-primary-dark">
        Vehicles by make
      </h1>

      <table className="w-full">
        <thead>
          <tr className="h-8 bg-accent-light">
            <th>Make</th>
            <th>Model</th>
          </tr>
        </thead>
        <tbody>
          <Suspense
            fallback={
              <tr>
                <td colSpan={2}>Loading...</td>
              </tr>
            }
          >
            <VehiclesTable vehicleData={vehicleData} />
          </Suspense>
        </tbody>
      </table>
    </div>
  )
}
