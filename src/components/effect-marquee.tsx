'use client'

import Image from 'next/image'
import Link from 'next/link'

import { Product } from '@/services/products/types'

import { PriceTag } from './price-tag'

type EffectMarqueeProps = {
  products: Product[]
}

export const EffectMarquee = ({ products }: EffectMarqueeProps) => {
  return (
    <div className="overflow-x-auto">
      <ul className="hover:animate-pause animate-play flex w-full animate-marquee gap-4 pb-4">
        {products.map((product) => (
          <li
            key={product.id}
            className="group relative aspect-square h-[30vh] max-h-[18rem] w-2/3 max-w-md flex-none overflow-hidden rounded-lg border border-zinc-300 shadow transition-transform hover:border-zinc-400 md:w-1/3"
          >
            <Link href={`/product/${product.id}`} className="h-full w-full">
              <Image
                fill
                src={product.image}
                alt={product.title}
                className="w-full object-contain p-5 transition-transform group-hover:scale-95"
              />
            </Link>

            <div className="absolute bottom-0 z-10 m-4 flex items-center gap-4 rounded-full border border-gray-200 bg-gray-50 p-1">
              <h2 className="pl-4 text-xs font-semibold text-gray-800">
                {product.title}
              </h2>

              <PriceTag price={product.price} className="text-xs" />
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
