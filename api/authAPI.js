import { request } from './requet'
const AdminAuthUrl = {
  base: '/login'
}
export const apiLogin = (data) => {
  return request({
    url: AdminAuthUrl.base,
    method: 'post',
    data
  })
} 
