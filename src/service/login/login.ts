import tcRequest from '../index'
import { IAcount } from './type'

enum LoginAPI {
  AccountLogin = '/login'
}

export function accountLoginRequest(account: IAcount) {
  return tcRequest.post({
    url: LoginAPI.AccountLogin,
    data: account
  })
}
