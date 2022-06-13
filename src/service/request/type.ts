import type { AxiosRequestConfig, AxiosResponse } from 'axios'

interface TCRequestInterceptors<T = AxiosResponse> {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any
  responseInterceptor?: (res: T) => T
  responseInterceptorCatch?: (error: any) => any
}

interface TCRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: TCRequestInterceptors<T>
  showLoading?: boolean
}

export { TCRequestInterceptors, TCRequestConfig }
