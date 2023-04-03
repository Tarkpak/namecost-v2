import axios from 'axios'
// import { render } from 'react-dom'
import Message from '../components/alert/fail'
import Toast from '@/components/alert'
import { isArray } from 'util'


const http = axios.create({
  baseURL: '/api',
  withCredentials: true,
})

const beforeRequest = (config) => {
  const token = localStorage.getItem('token')
  token && (config.headers.Authorization = `Bearer ${token}`)
  config.headers.namecost = '1'
  return config
}

http.interceptors.request.use(beforeRequest)


const responseSuccess = (response) => {
  // console.log('response', response.data);
  const data = response.data;
  if ([-10014, -20010, -10013, -20012, -60200, -60010, -50010, -30010].includes(data.code) && data.message) {
    // const container = document.createElement('div')
    // container.id = 'messageContainer'
    // container.style = `
    //   position: fixed;
    //   width: 100%;
    //   height: 100%;
    //   display: flex;
    //   justify-content: center;
    //   z-index: 999;
    // `
    // document.body.appendChild(container)
    // const root = createRoot(container)
    // root.render(<Message errList={data.message.split('\n')} />)
    Toast(data.message)
    if (data.code === -10013) {
      localStorage.removeItem('token');
      localStorage.removeItem('userInfo');
      location.href = '/'
    }
    return Promise.reject(data.message)
  }
  const [_, dataset] = Object.entries(response.data?.data)[0]
  return Promise.resolve(Array.isArray(dataset) ? dataset : response.data.data)
}

const responseFailed = (error) => {
  console.log(123, error)
  const { response } = error
  if (response) {
    if (response.data?.message?.includes('no token')) {
      location.href = '/login'
      return Promise.reject(response)
    }
    Toast(response.data.message)
    return Promise.reject(response)
  } else if (!window.navigator.onLine) {
    return Promise.reject(new Error('please check your network'))
  }
  return Promise.reject(error)
}

http.interceptors.response.use(responseSuccess, responseFailed)


// export const post = (url, params, confirm = false) => {
//   return new Promise((resolve, reject) => {
//     if (confirm || confirm.confirm) {
//       MessageBox.confirm(confirm.confirm || '确认操作吗', '提示', {
//         confirmButtonText: '确定',
//         cancelButtonText: '取消',
//         type: 'warning',
//       })
//         .then(() => {
//           // NOTE 不要使用 {} 包裹 params
//           resolve(http.post(url, params))
//         })
//         .catch(_ => {
//           console.log('取消请求')
//         })
//     } else {
//       resolve(http.post(url, params))
//     }
//   })
// }

export default http
