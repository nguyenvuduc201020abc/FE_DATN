import Cookies from 'js-cookie'
import { useEffect, useState } from 'react'


import { RoleEnum } from '../shares/role'
import UserHome from '../components/pageComponents/homeComponent/userHome'
import SuperAdminhome from '../components/pageComponents/homeComponent/SuperAdminhome'
import Adminhome from '../components/pageComponents/homeComponent/adminhome'

const Index = () => {
  const [isRoleSuper, setIsRoleSuper] = useState()
  const [isRoleAdmin, setIsRoleAdmin] = useState()
  const [role, setRole] = useState(0)

  useEffect(() => {
    setRole(parseInt(Cookies.get('role')))
    setIsRoleSuper(role === RoleEnum.superAdmin)
    setIsRoleAdmin(role === RoleEnum.admin)
  })

  return (
    <>
      {isRoleSuper && <SuperAdminhome />}
      {isRoleAdmin && <Adminhome /> }
      {role === RoleEnum.user && <UserHome/>}
      
    </>
  )
}

export default Index
