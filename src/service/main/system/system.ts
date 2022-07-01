import tcRequest from '@/service'
import { IDataType } from '../../type'

export function getPageListData(url: string, queryInfo: any) {
  return tcRequest.post<IDataType>({
    url: url,
    data: queryInfo
  })
}
