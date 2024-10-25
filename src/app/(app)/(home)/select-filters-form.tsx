'use client'

import { Button } from '@/components/button'
import { FormattedVehicleMake } from '@/services/vehicle/types'
import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import Select from 'react-select'
import { z } from 'zod'

const selectFiltersFormSchema = z.object({
  vehicleMake: z.object({
    value: z.number(),
    label: z.string(),
  }),
  modelYear: z.object({
    value: z.number(),
    label: z.number(),
  }),
})

type SelectFiltersFormSchema = z.infer<typeof selectFiltersFormSchema>

interface SelectFiltersFormProps {
  vehicleMakes: FormattedVehicleMake[]
  modelYears: {
    value: number
    label: number
  }[]
}

export function SelectFiltersForm({
  vehicleMakes,
  modelYears,
}: SelectFiltersFormProps) {
  const { control, handleSubmit, watch } = useForm<SelectFiltersFormSchema>({
    resolver: zodResolver(selectFiltersFormSchema),
  })

  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const onFormSubmit = (data: SelectFiltersFormSchema) => {
    const vehicleMake = data.vehicleMake.value
    const modelYear = data.modelYear.value

    console.log(vehicleMake, modelYear)
  }

  const vehicle = watch('vehicleMake')
  const year = watch('modelYear')
  const buttonDisabled = !vehicle || !year

  if (!isMounted) return null

  return (
    <form
      onSubmit={handleSubmit(onFormSubmit)}
      className="flex flex-col items-center gap-12"
    >
      <div className="mb-16 flex items-center gap-4">
        <Controller
          control={control}
          name="vehicleMake"
          render={({ field: { onChange } }) => (
            <Select
              className="w-64"
              onChange={onChange}
              placeholder="Vehicle make"
              options={vehicleMakes}
            />
          )}
        />

        <Controller
          control={control}
          name="modelYear"
          render={({ field: { onChange } }) => (
            <Select
              className="w-64"
              onChange={onChange}
              placeholder="Model year"
              options={modelYears}
            />
          )}
        />
      </div>

      <Link href={`/result/${vehicle?.value}/${year?.value}`}>
        <Button disabled={buttonDisabled}>Next</Button>
      </Link>
    </form>
  )
}
