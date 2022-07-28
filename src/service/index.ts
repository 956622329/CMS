//service统一出口
import TCRequest from './request'
import { API_BASE_URL, TIME_OUT } from './request/config'

import LocalCache from '@/utils/cache'

const tcRequest = new TCRequest({
  baseURL: API_BASE_URL,
  timeout: TIME_OUT,

  interceptors: {
    requestInterceptor: (config) => {
      //携带token的拦截
      const token = LocalCache.getCache('token')
      if (token) {
        config.headers.Authorization = `Bearer ${token}`
      }
      return config
    },
    requestInterceptorCatch: (err) => {
      return err
    },
    responseInterceptor: (res) => {
      return res
    },
    responseInterceptorCatch: (err) => {
      return err
    }
  }
})

export default tcRequest
