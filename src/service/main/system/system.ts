import tcRequest from '@/service'
import { IDataType } from '../../type'

export function getPageListData(url: string, queryInfo: any) {
  return tcRequest.post<IDataType>({
    url: url,
    data: queryInfo
  })
}

// url: /users/id
export function deletePageData(url: string) {
  return tcRequest.delete<IDataType>({
    url: url
  })
}

export function createPageData(url: string, newData: any) {
  return tcRequest.post<IDataType>({
    url: url,
    data: newData
  })
}

export function editPageData(url: string, editData: any) {
  return tcRequest.patch<IDataType>({
    url: url,
    data: editData
  })
}
