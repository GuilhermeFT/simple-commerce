import Image from 'next/image'

import { PriceTag } from '@/components/price-tag'
import { getProduct } from '@/services/products'

export default async function Product({
  params,
}: {
  params: Promise<{ productId: string }>
}) {
  const { productId } = await params

  const product = await getProduct(productId)
  return (
    <main>
      <section className="mx-auto flex w-full max-w-screen-2xl gap-8 px-4">
        <div className="flex w-full flex-col rounded-lg bg-gray-700 p-8 shadow-lg lg:flex-row lg:gap-6">
          <div className="relative aspect-square h-full max-h-[550px] w-full flex-1 overflow-hidden rounded-lg bg-gray-50">
            <Image
              fill
              src={product.image}
              alt={product.title}
              className="w-full object-contain"
            />
          </div>

          <div className="flex basis-1/3 flex-col gap-6">
            <header className="grid gap-2 border-b pb-6">
              <h1 className="text-4xl font-medium text-white">
                {product.title}
              </h1>
              <PriceTag price={product.price} />
            </header>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-screen-2xl gap-8 px-4 py-6">
        <div className="border-t pt-6">
          <h2 className="mb-4 text-3xl font-semibold text-gray-800">
            Description
          </h2>
          <p className="text-lg text-gray-600">{product.description}</p>
        </div>
      </section>
    </main>
  )
}
