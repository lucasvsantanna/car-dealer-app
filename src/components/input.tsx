import { ComponentProps, forwardRef } from 'react'
import { tv, VariantProps } from 'tailwind-variants'

const input = tv({
  base: 'rounded bg-neutral-light w-full border border-neutral-dark focus:outline-none focus:ring-2 focus:ring-primary-dark focus:border-transparent',
  variants: {
    size: {
      default: 'w-64 h-10 px-4',
      full: 'w-full h-12 px-6',
    },
    error: {
      true: 'border-error-default focus:ring-error-default focus:border-transparent',
    },
  },
  defaultVariants: {
    size: 'default',
    error: false,
  },
})

export type InputProps = ComponentProps<'input'> & VariantProps<typeof input>

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ error, size, className, ...props }, ref) => {
    return (
      <input
        data-error={error}
        className={input({ error, size, className })}
        ref={ref}
        {...props}
      />
    )
  },
)

Input.displayName = 'Input'
