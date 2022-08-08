import tcRequest from '../../index'
import { IDataType } from '../../type'

enum DashboardAPI {
  categoryGoodsCount = '/goods/category/count',
  categoryGoodsSale = '/goods/category/sale',
  categoryGoodsFavor = '/goods/category/favor',
  addressGoodsSale = '/goods/address/sale',
  amountList = '/goods/amount/list'
}

export function getCategoryGoodsCount() {
  return tcRequest.get<IDataType>({
    url: DashboardAPI.categoryGoodsCount
  })
}

export function getCategoryGoodsSale() {
  return tcRequest.get<IDataType>({
    url: DashboardAPI.categoryGoodsSale
  })
}

export function getCategoryGoodsFavor() {
  return tcRequest.get<IDataType>({
    url: DashboardAPI.categoryGoodsFavor
  })
}

export function getAddressGoodsSale() {
  return tcRequest.get<IDataType>({
    url: DashboardAPI.addressGoodsSale
  })
}

export function getAmountList() {
  return tcRequest.get<IDataType>({
    url: DashboardAPI.amountList
  })
}
