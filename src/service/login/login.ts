import tcRequest from '../index'
import { IAcount, ILoginResult, IDataType } from './type'

enum LoginAPI {
  AccountLogin = '/login'
}

export function accountLoginRequest(account: IAcount) {
  return tcRequest.post<IDataType<ILoginResult>>({
    url: LoginAPI.AccountLogin,
    data: account
  })
}
