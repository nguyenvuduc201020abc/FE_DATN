import { request } from './requet'
const ChangePassUrl = {
  base: 'account/changepass'
}
const GetAllAccount = {
  base: 'account?Skip=0&PageSize=1000000000'
}
const PostAccount = {
  base: '/account'
}
export const apiChangePassword = (data) => {
  return request({
    url: ChangePassUrl.base,
    method: 'put',
    data
  })
}

export const apiGetAllDevice = async () => {
  return request({
    url: GetAllAccount.base,
    method: 'get'
  })
}
export const apiPostAccount = async () => {
  return request({
    url: PostAccount.base,
    method: 'post'
  })
}
