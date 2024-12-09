import { env } from '@/utils/env'

import { type Product } from './types'

export const getProducts = async () => {
  const response = await fetch(`${env.COMMERCE_API_URL}/products`, {
    cache: 'force-cache',
  })

  const products = await response.json()

  return products as Product[]
}

export const getAllCategories = async () => {
  const response = await fetch(`${env.COMMERCE_API_URL}/products/categories`, {
    cache: 'force-cache',
  })

  const categories = await response.json()

  return categories as string[]
}

export const getProduct = async (id: string) => {
  const response = await fetch(`${env.COMMERCE_API_URL}/products/${id}`, {
    cache: 'force-cache',
  })

  const product = await response.json()

  return product as Product
}
