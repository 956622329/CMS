import { Module } from 'vuex'
import { ISystemState } from './type'
import { IRootState } from '@/store/types'

import { getPageListData } from '@/service/main/system/system'

const systemModule: Module<ISystemState, IRootState> = {
  namespaced: true,
  state() {
    return {
      userList: [],
      userCount: 0,
      roleList: [],
      roleCount: 0
    }
  },
  mutations: {
    changeUsersList(state, userList: any[]) {
      state.userList = userList
    },
    changeUsersCount(state, userCount: number) {
      state.userCount = userCount
    },
    changeRoleList(state, roleList: any[]) {
      state.roleList = roleList
    },
    changeRoleCount(state, roleCount: number) {
      state.roleCount = roleCount
    }
  },
  actions: {
    async getPageListAction({ commit }, payload: any) {
      //1.获取url
      const pageName = payload.pageName

      let pageUrl = ''
      switch (pageName) {
        case 'users':
          pageUrl = '/users/list'
          break
        case 'role':
          pageUrl = '/role/list'
          break
      }

      //2.对页面发送请求
      const pageResult = await getPageListData(pageUrl, payload.queryInfo)

      //3.将数据存储到state中
      const { list, totalCount } = pageResult.data

      commit(
        `change${
          pageName.slice(0, 1).toUpperCase() + pageName.slice(1).toLowerCase()
        }List`,
        list
      )
      commit(
        `change${
          pageName.slice(0, 1).toUpperCase() + pageName.slice(1).toLowerCase()
        }Count`,
        totalCount
      )
    }
  }
}

export default systemModule
