import axios from 'axios'
axios.defaults.baseURL = 'http://123.207.32.32:8000'
axios.get('/home/multidata').then((res) => {
  console.log(res.data)
})

axios
  .get('http://httpbin.org/get', {
    params: {
      name: 'xiaozhang',
      age: 18
    }
  })
  .then((res) => {
    console.log(res.data)
  })

axios
  .post('http://httpbin.org/post', {
    name: 'xiaozhang',
    age: 18
  })
  .then((res) => {
    console.log(res.data)
  })
