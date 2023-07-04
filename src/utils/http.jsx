import { message } from 'ant-design-vue'
import axios from 'axios'

let instance = axios.create({
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
  },
  timeout: 60000,
})

instance.interceptors.request.use(config => {
  config.headers = { ...(config.headers || {}) }
  return config
})

function handleError(res) {
  console.log(res)
}

function ajax(config, handle) {
  return new Promise((resolve, reject) => {
    instance
      .request(config)
      .then(({ data, ...args }) => {
        if (handle) {
          message.success(data.message)
        }
        if (typeof data === 'object' && data.toString() === '[object ArrayBuffer]') {
          resolve({ data, ...args })
        } else {
          resolve(data)
        }
      })
      .catch(res => handleError(res, reject))
  })
}

const http = {
  get: (url, params = {}, handle = false, config = {}) => ajax({ ...config, url, params }, handle),
  post: (url, data = {}, handle = false, config = {}) => ajax({ ...config, url, data, method: 'post' }, handle),
}

export default http
