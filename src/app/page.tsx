import Image from 'next/image'
import Link from 'next/link'

import { getProducts } from '@/services/products'
import { cn } from '@/lib/utils'
import { PriceTag } from '@/components/price-tag'
import { EffectMarquee } from '@/components/effect-marquee'

export default async function Preview() {
  const products = await getProducts()

  const hightLightProducts = products.slice(0, 3)
  console.log(hightLightProducts.length)

  return (
    <main className="min-h-screen bg-zinc-50">
      <section className="mx-auto grid w-full max-w-screen-2xl gap-6 p-6 md:grid-cols-6 md:grid-rows-2 lg:max-h-[calc(100dvh_-_200px)]">
        {hightLightProducts.map((product, i) => (
          <div
            key={product.id}
            className={cn(
              'group overflow-hidden rounded-lg border border-zinc-300 shadow transition-transform hover:border-zinc-400',
              i === 0
                ? 'md:col-span-4 md:row-span-2'
                : 'md:col-span-2 md:row-span-1',
            )}
          >
            <Link
              href={`/product/${product.id}`}
              className="relative block aspect-square h-full w-full"
            >
              <Image
                fill
                src={product.image}
                alt={product.title}
                className="object-contain p-10 transition-transform group-hover:scale-95"
              />

              <div className="absolute bottom-0 z-10 m-4 flex items-center gap-4 rounded-full border border-zinc-300 bg-white p-1">
                <h2 className="pl-4 text-xs font-semibold text-zinc-800">
                  {product.title}
                </h2>

                <PriceTag price={product.price} />
              </div>
            </Link>
          </div>
        ))}
      </section>

      <section>
        <EffectMarquee products={products} />
      </section>
    </main>
  )
}
