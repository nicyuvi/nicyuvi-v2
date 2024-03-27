import React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

const sectionHeaderVariants = cva(
  'max-w-sm border-b border-b-primary pb-2 mb-10',
  {
    variants: {
      variant: {
        default: '',
        center: 'text-center mx-auto',
      },
      size: {
        default: 'text-4xl',
        md: 'text-5xl',
        lg: 'text-6xl',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

export interface SectionHeaderProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof sectionHeaderVariants> {
  children: React.ReactNode
}

export default function SectionHeader({
  className,
  variant,
  size,
  children,
  ...props
}: SectionHeaderProps) {
  return (
    <h2
      className={sectionHeaderVariants({ variant, size, className })}
      {...props}
    >
      {children}
    </h2>
  )
}
