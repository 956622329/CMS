//service统一出口
import HYRequest from './request'
import { BASE_URL, BTIME_OUT } from './request/config'

const hyrequest = new HYRequest({
  baseURL: BASE_URL,
  timeout: BTIME_OUT,

  interceptors: {
    requestInterceptor: (config) => {
      console.log('请求成功拦截')
      return config
    },
    requestInterceptorCatch: (err) => {
      console.log('请求失败拦截')
      return err
    },
    responseInterceptor: (res) => {
      console.log('响应成功拦截')
      return res
    },
    responseInterceptorCatch: (err) => {
      console.log('响应失败拦截')
      return err
    }
  }
})

export default hyrequest
