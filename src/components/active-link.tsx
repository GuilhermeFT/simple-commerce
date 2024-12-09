'use client'
import Link, { LinkProps } from 'next/link'
import { usePathname } from 'next/navigation'

import { cn } from '@/lib/utils'

type ActiveLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & LinkProps

export const ActiveLink = ({ className, ...props }: ActiveLinkProps) => {
  const pathname = usePathname()

  console.log(pathname)

  return (
    <Link
      {...props}
      className={cn(
        'text-sm capitalize text-gray-700 transition-colors hover:text-gray-900 hover:underline',
        className,
        props.href === decodeURIComponent(pathname) && 'underline',
      )}
    />
  )
}
