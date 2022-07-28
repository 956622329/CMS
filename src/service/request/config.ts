// 1.区分环境变量方式一:
// export const API_BASE_URL = 'https://coderwhy/org/dev'
// export const API_BASE_URL = 'https://coderwhy/org/prod'

// 2.根据process.env.NODE_ENV区分
// 开发环境: development
// 生成环境: production
// 测试环境: test
// let BASE_URL = ''
// const TIME_OUT = 1000

// if (process.env.NODE_ENV === 'development') {
//   BASE_URL = '/api'
// } else if (process.env.NODE_ENV === 'production') {
//   BASE_URL = 'http://152.136.185.210:5000'
// } else {
//   BASE_URL = 'http://152.136.185.210:5000'
// }
// export { BASE_URL, TIME_OUT }

// 3.区分环境变量方式三: 加载.env文件
export const API_BASE_URL = process.env.VUE_APP_BASE_URL

export const TIME_OUT = 10000
