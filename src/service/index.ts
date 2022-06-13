//service统一出口
import TCRequest from './request'
import { BASE_URL, BTIME_OUT } from './request/config'

const tcRequest = new TCRequest({
  baseURL: BASE_URL,
  timeout: BTIME_OUT,

  interceptors: {
    requestInterceptor: (config) => {
      //携带token的拦截
      const token = ''
      if (token) {
        config.headers.Authorization = 'bearer${token}'
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
