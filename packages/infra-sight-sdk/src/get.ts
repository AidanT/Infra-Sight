import { INFRA_SIGHT_API_URL } from './environment.js'
import { createErrorFromObject } from './errors.js'

export const get = async (path: string, params: Record<string, undefined | string | (undefined | string)[]> = {}) => {
  const url = new URL(path, INFRA_SIGHT_API_URL)

  for (const [parameter, value] of Object.entries(params)) {
    const values = Array.isArray(value) ? value : [value]
    for (const value of values) {
      if (value) url.searchParams.append(parameter, value)
    }
  }

  const response = await fetch(url.href)
  if (!response.ok) throw createErrorFromObject(await response.json())
  return response.json()
}