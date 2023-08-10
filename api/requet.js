import axios from 'axios'
import Cookies from 'js-cookie'

// export const BASE_URL = 'http://103.163.118.131:8080'
export const BASE_URL = 'http://localhost:8080'
//export const BASE_URL = 'http://103.229.41.235:6243/api/'

export const request = async () => {return await axios.create({
  baseURL: BASE_URL,
  timeout: 20_000,
  headers: { Authorization: `Bearer ${Cookies.get('jwt_token')}` }
})}
