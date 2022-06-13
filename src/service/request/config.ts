// 2.根据process.env.NODE_ENV区分
// 开发环境: development
// 生成环境: production
// 测试环境: test
let BASE_URL = ''
const BTIME_OUT = 1000

if (process.env.NODE_ENV === 'development') {
  BASE_URL = '/api'
} else if (process.env.NODE_ENV === 'production') {
  BASE_URL = 'http://123.207.32.32:8000/'
} else {
  BASE_URL = 'http://123.207.32.32:8000/'
}
export { BASE_URL, BTIME_OUT }
