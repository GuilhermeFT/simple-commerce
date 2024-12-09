import Image from 'next/image'
import Link from 'next/link'

import { getProducts } from '@/services/products'
import { PriceTag } from '@/components/price-tag'

type SearchPageContentProps = {
  category?: string
  query?: string
}

export const SearchPageContent = async ({
  category,
  query,
}: SearchPageContentProps) => {
  const products = await getProducts()

  const decodedCategory = category ? decodeURIComponent(category) : 'all'

  const filteredProducts = query
    ? products.filter(
        (product) =>
          product.title.toLowerCase().includes(query.toLowerCase()) ||
          product.description.toLowerCase().includes(query.toLowerCase()),
      )
    : decodedCategory === 'all'
      ? products
      : products.filter((product) => product.category === decodedCategory)

  return (
    <div className="w-full">
      {query && (
        <p className="mb-4">
          Showing {filteredProducts.length} results for{' '}
          <strong>
            {'"'}
            {query}
            {'"'}
          </strong>
        </p>
      )}

      <div className="grid flex-1 grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="group overflow-hidden rounded-lg border border-zinc-300 shadow transition-transform hover:border-zinc-400"
          >
            <Link
              href={`/product/${product.id}`}
              className="relative block aspect-square h-full w-full"
            >
              <Image
                fill
                src={product.image}
                alt={product.title}
                className="w-full object-contain p-10 transition-transform group-hover:scale-95"
              />
              <div className="absolute bottom-0 z-10 m-4 flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50 p-1">
                <h2 className="pl-4 text-xs font-semibold text-gray-800">
                  {product.title}
                </h2>

                <PriceTag price={product.price} />
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}
