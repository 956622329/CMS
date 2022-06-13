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
  mutations: {},
  actions: {
    accountLoginAction({ commit }, payload: any) {
      //实现登录逻辑
      console.log('执行accountLoginAction', payload)
    },
    phoneLoginAction({ commit }, payload: any) {
      console.log('执行phoneLoginAction', payload)
    }
  }
}

export default loginModule
