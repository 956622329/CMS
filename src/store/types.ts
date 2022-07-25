import { ISystemState } from './main/system/type'
import { ILoginSate } from './login/types'
export interface IRootState {
  entireDepartment: any[]
  entireRole: any[]
  entireMenu: any[]
}

export interface IRootWithModule {
  login: ILoginSate
  system: ISystemState
}

export type IStoreType = IRootState & IRootWithModule
