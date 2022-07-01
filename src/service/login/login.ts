import tcRequest from '../index'
import { IAcount, ILoginResult } from './type'
import { IDataType } from '../type'

enum LoginAPI {
  AccountLogin = '/login',
  loginUserInfo = '/users/',
  UserMenus = '/role/'
}

export function accountLoginRequest(account: IAcount) {
  return tcRequest.post<IDataType<ILoginResult>>({
    url: LoginAPI.AccountLogin,
    data: account
  })
}

export function requestUserInfoById(id: number) {
  return tcRequest.get<IDataType>({
    url: LoginAPI.loginUserInfo + id,
    showLoading: false
  })
}

export function requestUserMenusById(id: number) {
  return tcRequest.get<IDataType>({
    url: LoginAPI.UserMenus + id + '/menu',
    showLoading: false
  })
}
