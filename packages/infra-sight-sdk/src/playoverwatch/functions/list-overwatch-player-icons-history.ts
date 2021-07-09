import { get } from '../../get.js'
import { InfraSightAPI } from '../../infra-sight-api.js'
import { InfraSightPaginationOptions } from '../types/infra-sight-pagination-options.js'
import { InfraSightPaginationResponse } from '../types/infra-sight-pagination-response.js'

export type ListOverwatchPlayerIconsHistory = (this: InfraSightAPI, options: InfraSightPaginationOptions) => Promise<InfraSightPaginationResponse>

export const listOverwatchPlayerIconsHistory: ListOverwatchPlayerIconsHistory = async ({ token }) => {
  return get('./v2/api/overwatch/player-icons/history', { token })
}