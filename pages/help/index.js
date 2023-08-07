import Cookies from 'js-cookie'
import { useEffect, useState } from 'react'

import { RoleEnum } from '../../shares/role'
import HelpAdminPageCom from '../../components/pageComponents/helpPageComponent/helpAdminPageCom'
import HelpUserPageComponent from '../../components/pageComponents/helpPageComponent/helpUserPageComponent'

const Index = () => {
  const [isRoleVip, setIsRoleVip] = useState()

  const [role, setRole] = useState(0)

  useEffect(() => {
    setRole(parseInt(Cookies.get('role')))
    setIsRoleVip(role === RoleEnum.superAdmin || role === RoleEnum.admin)
  })
  return (
    <>
      {isRoleVip && <HelpAdminPageCom />}
      {role === RoleEnum.user && <HelpUserPageComponent />}
    </>
  )
}

export default Index