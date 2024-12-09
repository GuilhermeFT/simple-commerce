'use client'

import { useSearchParams } from 'next/navigation'

import { Input } from '../ui/input'

export const InputSearch = () => {
  const searchParams = useSearchParams()

  return (
    <form action="/search" className="w-full">
      <Input
        name="q"
        type="search"
        placeholder="Search for products"
        defaultValue={searchParams.get('q') || ''}
      />
    </form>
  )
}
