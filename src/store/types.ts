import { ILoginSate } from './login/types'
export interface IRootState {
  name: string
  age: number
}

export interface IRootWithModule {
  login: ILoginSate
}

export type IStoreType = IRootState & IRootWithModule
