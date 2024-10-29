import { env } from '@/utils/env'

import { type Product } from './types'

export const getProducts = async () => {
  const response = await fetch(`${env.COMMERCE_API_URL}/products`)

  const products = await response.json()

  return products as Product[]
}

export const getAllCategories = async () => {
  const response = await fetch(`${env.COMMERCE_API_URL}/products/categories`)

  const categories = await response.json()

  return categories as string[]
}
