import { get } from '../../get.js'
import { InfraSightAPI } from '../../infra-sight-api.js'
import { InfraSightPaginationOptions } from '../types/infra-sight-pagination-options.js'
import { InfraSightPaginationResponse } from '../types/infra-sight-pagination-response.js'

export type ListOverwatchProfileHistory = (this: InfraSightAPI, username: string, options: InfraSightPaginationOptions) => Promise<InfraSightPaginationResponse>

export const listOverwatchProfileHistory: ListOverwatchProfileHistory = async (username, { token }) => {
  return get(`./v2/api/overwatch/profiles/${Buffer.from(username, 'utf8').toString('hex')}/history`, { token })
}