import axios from 'axios'
import { Message } from 'iview'

// create an axios instance
const BASE_URL = process.env.NODE_ENV === 'development' ? '/api' : process.env.BASE_URL
console.log(BASE_URL)
const service = axios.create({
  baseURL: BASE_URL, // api的base_url
  timeout: 5000 // request timeout
})
axios.interceptors.response.use(function (response) {
  console.log(response)
  // 对响应数据做点什么
  const res = response.data
  if (res.code !== 0) {
    Message({
      message: res.message,
      type: 'error',
      duration: 5 * 1000
    })
    return res
  } else {
    response.data.isLoading = false
    return response.data
  }
})

export default service
