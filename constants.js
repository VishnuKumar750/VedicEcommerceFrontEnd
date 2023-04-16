import axios from "axios"
import Cookies from "js-cookie"

export const BASE_URL = 'http://localhost:5000/api'

export const Token = Cookies.get('accessToken')

const instance = axios.create({
      baseURL: BASE_URL,
      headers: {
         'Content-Type': 'application/json',
      }
})

const simpleRequest = (method, endpoint, data) => {
   return instance({
      method,
      url: endpoint,
      data
   })
}

const tokenRequest = (method, endpoint, data) => {
   return instance({
      method,
      url: endpoint,
      data,
      headers: {
         ...instance.defaults.headers.common,
         token: `Bearer ${Token}`
      }
   })
}

export { simpleRequest, tokenRequest };