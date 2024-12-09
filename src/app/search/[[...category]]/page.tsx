import { Suspense } from 'react'

import { ActiveLink } from '@/components/active-link'
import { getAllCategories } from '@/services/products'

import { SearchPageContent } from './content'
import { ContentSkeleton } from './skeleton'

export default async function Page({
  params,
  searchParams,
}: {
  params: Promise<{ category?: string }>
  searchParams: Promise<{ q?: string }>
}) {
  const categories = await getAllCategories()
  console.log(categories)

  const { category } = await params
  const { q } = await searchParams

  return (
    <main>
      <section className="mx-auto flex w-full max-w-screen-2xl gap-8 px-4">
        <div className="hidden min-w-32 md:block">
          <nav>
            <h3 className="text-xs text-gray-500">Categories</h3>

            <ul>
              <li>
                <ActiveLink href="/search" className="">
                  All
                </ActiveLink>
              </li>

              {categories.map((category) => (
                <li key={category}>
                  <ActiveLink href={`/search/${category}`} className="">
                    {category}
                  </ActiveLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <Suspense fallback={<ContentSkeleton />}>
          <SearchPageContent category={category} query={q} />
        </Suspense>

        <div className="hidden min-w-32 md:block"></div>
      </section>
    </main>
  )
}
