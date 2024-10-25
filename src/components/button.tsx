import { ComponentProps } from 'react'
import { tv, VariantProps } from 'tailwind-variants'

const button = tv({
  base: 'flex items-center justify-center rounded bg-accent-dark hover:bg-accent disabled:cursor-default disabled:bg-disabled-bg disabled:text-disabled-text text-white font-medium transition-colors',
  variants: {
    size: {
      default: 'h-10 px-4',
      sm: 'h-8 px-3',
      xs: 'h-6 px-2 text-sm',
    },
  },
  defaultVariants: {
    size: 'default',
  },
})

export type ButtonProps = ComponentProps<'button'> & VariantProps<typeof button>

export function Button({ size, className, ...props }: ButtonProps) {
  return <button className={button({ size, className })} {...props}></button>
}
