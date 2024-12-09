import { getAllCategories } from '@/services/products'
import { Header } from '@/components/header'

type Props = {
  children: React.ReactNode
}

export default async function Template({ children }: Props) {
  const categories = await getAllCategories()

  return (
    <>
      <Header categories={categories} />

      <div className="h-[calc(100dvh-4.5rem-5.75rem)]">{children}</div>

      <footer className="mt-6 border-t bg-white">
        <div className="m-auto flex max-w-7xl justify-between py-6 text-sm text-zinc-400">
          <p>
            &copy; {new Date().getFullYear()} Simple Commerce. All rights
            reserved.
          </p>
        </div>
      </footer>
    </>
  )
}
