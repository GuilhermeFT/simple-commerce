import { Menu, ShoppingCart } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import { Button } from '@/components/ui/button'

import { InputSearch } from './input-search'

type HeaderProps = {
  categories: string[]
}

export const Header = ({ categories }: HeaderProps) => {
  return (
    <header className="flex gap-4 p-4 px-6">
      <Button size="icon" variant="outline" className="h-10 w-10 md:hidden">
        <Menu />
      </Button>

      <nav className="flex min-w-max flex-1 items-center justify-center gap-4 md:w-1/3 md:justify-start">
        <Link href="/" className="flex w-max items-center gap-2">
          <Image
            src="https://avatars.githubusercontent.com/u/38335563?v=4"
            width={40}
            height={40}
            alt="Simple Commerce"
            className="h-10 w-10 rounded-xl border border-zinc-500 object-cover"
          />

          <span className="text-sm font-medium uppercase md:hidden xl:block">
            Store name
          </span>
        </Link>

        <ul className="hidden gap-6 md:flex">
          <li>
            <Link
              href="/search"
              className="text-sm capitalize text-gray-700 transition-colors hover:text-gray-900 hover:underline"
            >
              All
            </Link>
          </li>

          {categories.slice(0, 2).map((category) => (
            <li key={category}>
              <Link
                href={`/search/${category}`}
                className="text-sm capitalize text-gray-700 transition-colors hover:text-gray-900 hover:underline"
              >
                {category}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="hidden md:flex md:w-1/3">
        <InputSearch />
      </div>

      <div className="flex justify-end md:w-1/3">
        <Button size="icon" variant="outline" className="h-10 w-10">
          <ShoppingCart />
        </Button>
      </div>
    </header>
  )
}
