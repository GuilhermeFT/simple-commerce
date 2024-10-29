import { Button } from '@/components/ui/button'
import { getAllCategories } from '@/services/products'
import { ShoppingCart } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

type Props = {
  children: React.ReactNode
}

export default async function Template({ children }: Props) {
  const categories = await getAllCategories()
  return (
    <>
      <header className="flex p-4 px-6">
        <nav className="flex flex-1 items-center gap-4 lg:gap-6">
          <Link href="/" className="flex w-max items-center gap-2">
            <Image
              src="https://avatars.githubusercontent.com/u/38335563?v=4"
              width={40}
              height={40}
              alt="Simple Commerce"
              className="h-10 w-10 rounded-xl border border-zinc-500 object-cover"
            />

            <span className="hidden text-sm font-medium uppercase lg:block">
              Store name
            </span>
          </Link>

          <ul className="hidden gap-6 md:flex">
            {categories.map((category) => (
              <li key={category}>
                <Link
                  href={`/category/${category}`}
                  className="text-sm capitalize text-gray-700 transition-colors hover:text-gray-900"
                >
                  {category}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <Button size="icon" variant="outline" className="h-10 w-10">
          <ShoppingCart />
        </Button>
      </header>
      {children}
    </>
  )
}
