type PriceTagProps = {
  price: number
  className?: string
}

export const PriceTag = ({ price, className }: PriceTagProps) => {
  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(price)

  return (
    <p
      className={`w-max rounded-full bg-blue-600 p-2 text-sm font-bold text-white ${className}`}
    >
      {formattedPrice}
    </p>
  )
}
