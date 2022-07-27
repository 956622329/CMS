import { ISystemState } from './main/system/type'
import { ILoginSate } from './login/types'
import { IDasboardState } from './main/analysis/types'

export interface IRootState {
  entireDepartment: any[]
  entireRole: any[]
  entireMenu: any[]
}

export interface IRootWithModule {
  login: ILoginSate
  system: ISystemState
  dashboard: IDasboardState
}

export type IStoreType = IRootState & IRootWithModule
