import { SelectFiltersForm } from './select-filters-form'
import { vehicleService } from '@/services/vehicle/vehicle-service'
import { modelYearsOptions } from '@/data/years'
import { Suspense } from 'react'

export default async function Home() {
  const vehicleMakes = await vehicleService.getMakes()
  const modelYears = modelYearsOptions()

  return (
    <div className="grid grid-rows-[20px_1fr] items-center justify-items-center gap-16 p-8 pb-20 sm:p-20">
      <h1 className="text-4xl font-semibold text-primary-dark">
        Car Dealer App
      </h1>
      <h2 className="text-2xl font-semibold text-primary-dark">
        Select a make and model year to view vehicles
      </h2>

      <Suspense
        fallback={
          <div>
            <p>Loading...</p>
          </div>
        }
      >
        <SelectFiltersForm
          vehicleMakes={vehicleMakes}
          modelYears={modelYears}
        />
      </Suspense>
    </div>
  )
}
