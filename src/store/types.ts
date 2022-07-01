import { ISystemState } from './main/system/type'
import { ILoginSate } from './login/types'
export interface IRootState {
  name: string
  age: number
}

export interface IRootWithModule {
  login: ILoginSate
  system: ISystemState
}

export type IStoreType = IRootState & IRootWithModule
