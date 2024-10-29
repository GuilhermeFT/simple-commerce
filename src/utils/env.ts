import { z } from 'zod'

const envSchema = z.object({
  NODE_ENV: z.string(),
  COMMERCE_API_URL: z.string(),
})

export const env = envSchema.parse(process.env)
