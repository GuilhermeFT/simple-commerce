export const ContentSkeleton = () => {
  return (
    <div className="grid flex-1 grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: 6 }).map((_, index) => (
        <div
          key={index}
          className="group overflow-hidden rounded-lg border border-gray-100 shadow-lg transition-transform"
        >
          <div className="relative block aspect-square h-full w-full animate-pulse bg-gray-100"></div>
        </div>
      ))}
    </div>
  )
}
