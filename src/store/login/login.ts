import { IAcount } from './../../service/login/type'
import { Module } from 'vuex'

import { ILoginSate } from './types'
import { IRootState } from '../types'

import {
  accountLoginRequest,
  requestUserInfoById,
  requestUserMenusById
} from '@/service/login/login'
import router from '@/router'
import localCache from '@/utils/cache'

const loginModule: Module<ILoginSate, IRootState> = {
  namespaced: true,
  state() {
    return {
      token: '',
      userInfo: {},
      userMenus: []
    }
  },
  getters: {},
  mutations: {
    changeToken(state, token) {
      // console.log(token)
      state.token = token
    },
    changeUserInfo(state, userInfo: any) {
      state.userInfo = userInfo
    },
    changeUserMenus(state, userMenus: any) {
      state.userMenus = userMenus
    }
  },
  actions: {
    //账号密码登录
    async accountLoginAction({ commit }, payload: IAcount) {
      //1.实现登录逻辑
      const loginResult = await accountLoginRequest(payload)
      const { id, token } = loginResult.data
      commit('changeToken', token)
      localCache.setCache('token', token)

      //2.请求用户信息
      const userInfoResult = await requestUserInfoById(id)
      const userInfo = userInfoResult.data
      commit('changeUserInfo', userInfo)
      localCache.setCache('userInfo', userInfo)

      //3.请求用户菜单
      const userMenuResult = await requestUserMenusById(userInfo.role.id)
      const userMenus = userMenuResult.data
      commit('changeUserMenus', userMenus)
      localCache.setCache('userMenus', userMenus)

      //4.跳到首页
      router.push('/main')
    }
    //手机号登录
    // phoneLoginAction({ commit }, payload: any) {
    //   console.log('执行phoneLoginAction', payload)
    // }
  }
}

export default loginModule
