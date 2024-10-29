import Image from 'next/image'

import { getProducts } from '@/services/products'
import { cn } from '@/lib/utils'

export default async function Preview() {
  const products = await getProducts()

  const hightLightProducts = products.slice(0, 3)
  console.log(hightLightProducts.length)

  return (
    <main className="">
      <section className="mx-auto grid w-full max-w-screen-2xl flex-1 grid-cols-5 grid-rows-2 gap-4 p-4">
        {hightLightProducts.map((product, i) => (
          <div
            key={product.id}
            className={cn(
              'group flex cursor-pointer flex-col items-center justify-center overflow-hidden rounded-md border border-gray-200 transition-colors hover:border-gray-400',
              i === 0 ? 'col-span-4 row-span-2' : 'col-span-1 row-span-1',
            )}
          >
            <div className="relative aspect-square w-full">
              <Image
                fill
                src={product.image}
                alt={product.title}
                className="w-full scale-95 object-contain transition-transform group-hover:scale-100"
              />
            </div>
          </div>
        ))}
      </section>

      <footer>
        <div className="border-t">
          <div className="m-auto flex max-w-7xl justify-between py-6 text-sm text-zinc-400">
            <p>
              &copy; {new Date().getFullYear()} Simple Commerce. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}
