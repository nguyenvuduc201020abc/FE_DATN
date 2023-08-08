import { request } from './requet'
const AdminAuthUrl = {
  base: '/login'
}

export const apiLogin =  async (data) => {
  return  await  request({
    url: AdminAuthUrl.base,
    method: 'post',
    data
  })
} 
