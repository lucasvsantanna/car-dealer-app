import { Vehicle } from '@/services/vehicle/types'

export function VehiclesTable({ vehicleData }: { vehicleData: Vehicle[] }) {
  return (
    <>
      {vehicleData.map((vehicle) => (
        <tr
          key={vehicle.Model_ID}
          className="h-8 bg-neutral even:bg-neutral-dark"
        >
          <td className="text-center">{vehicle.Make_Name}</td>
          <td className="text-center">{vehicle.Model_Name}</td>
        </tr>
      ))}
    </>
  )
}
