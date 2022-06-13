import { IAcount } from './../../service/login/type'
import { Module } from 'vuex'

import { ILoginSate } from './types'
import { IRootState } from '../types'

import { accountLoginRequest } from '@/service/login/login'

const loginModule: Module<ILoginSate, IRootState> = {
  namespaced: true,
  state() {
    return {
      token: '',
      userInfo: {}
    }
  },
  getters: {},
  mutations: {
    changeToken(state, token) {
      console.log(token)

      state.token = token
    }
  },
  actions: {
    //账号密码登录
    async accountLoginAction({ commit }, payload: IAcount) {
      //1.实现登录逻辑
      const loginResult = await accountLoginRequest(payload)
      const { id, token } = loginResult.data
      commit('changeToken', token)

      //2.请求用户信息
    }
    //手机号登录
    // phoneLoginAction({ commit }, payload: any) {
    //   console.log('执行phoneLoginAction', payload)
    // }
  }
}

export default loginModule
