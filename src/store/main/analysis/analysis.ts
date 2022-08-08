import { Module } from 'vuex'

import {
  getCategoryGoodsCount,
  getCategoryGoodsFavor,
  getCategoryGoodsSale,
  getAddressGoodsSale,
  getAmountList
} from '@/service/main/analysis/dashboard'

import { IDasboardState } from './types'
import { IRootState } from '../../types'

const dashboardModule: Module<IDasboardState, IRootState> = {
  namespaced: true,
  state() {
    return {
      categoryGoodsCount: [],
      categoryGoodsSale: [],
      categoryGoodsFavor: [],
      addressGoodsSale: [],
      topPanelDatas: []
    }
  },
  mutations: {
    changeCategoryGoodsCount(state, list) {
      state.categoryGoodsCount = list
    },
    changeCategoryGoodsSale(state, list) {
      state.categoryGoodsSale = list
    },
    changeCategoryGoodsFavor(state, list) {
      state.categoryGoodsFavor = list
    },
    changeAddressGoodsSale(state, list) {
      state.addressGoodsSale = list
    },
    changeTopPanelDatas(state, list) {
      state.topPanelDatas = list
    }
  },
  actions: {
    async getDashboardDataAction({ commit }) {
      const categoryCountResult = await getCategoryGoodsCount()
      commit('changeCategoryGoodsCount', categoryCountResult.data)
      const categorySaleResult = await getCategoryGoodsSale()
      commit('changeCategoryGoodsSale', categorySaleResult.data)
      const categoryFavorResult = await getCategoryGoodsFavor()
      commit('changeCategoryGoodsFavor', categoryFavorResult.data)
      const addressGoodsResult = await getAddressGoodsSale()
      commit('changeAddressGoodsSale', addressGoodsResult.data)
      const topPanelDatasResult = await getAmountList()
      commit('changeTopPanelDatas', topPanelDatasResult.data)
    }
  }
}
export default dashboardModule
