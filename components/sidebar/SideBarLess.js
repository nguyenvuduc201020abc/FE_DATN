import { memo, useEffect, useState } from "react"
import { Image } from 'antd'
import {
    CaretDownOutlined,
    CaretUpOutlined,
    DoubleRightOutlined
  } from '@ant-design/icons'
import { StyledButtonAntd } from '../styled/styledListOfDevice/styledComponent'
import {
  DivSideBarStyled1,
  DivSideBarStyled2,
  DivSideBarStyled3
} from '../styled/styledListOfSideBar/styledListOfSideBar'
import MenuButtonSideBarLess from "./menuButtonSideBarLess"
import HomeIcon from "../icons/homeIcon"
import { useRouter } from "next/router"
import { UrlPath } from "../../type/urlPath"
import ListIcon from "../icons/listIcon"
import COLOR from "../../utils/color"
import DeviceIcon from "../icons/deviceIcon"
import AccountIcon from "../icons/accountIcon"
import HelpIcon from "../icons/helpIcon"
import Cookies from "js-cookie"
import { RoleEnum } from "../../shares/role"
import MenuButtonTemp from "./menuButtonTemp"
import MenuChildrenButton from "./menuChildrenButton"


function SideBarLess({ onClick })  {
  const router = useRouter()
  const [isRoleVip, setIsRoleVip] = useState()
  const [role, setRole] = useState(0)
  const [isActiveDeivce, setIsActiveDevice] = useState(false)
  const [toggleCaret, setToggleCaret] = useState(false)
  useEffect(() => {
    setRole(parseInt(Cookies.get('role')))
    setIsRoleVip(role === RoleEnum.superAdmin || role === RoleEnum.admin)
  
  })
  const handleClickDeviceMenuButton = () => {
    setIsActiveDevice(!isActiveDeivce)
    setToggleCaret(!toggleCaret)
  }
    return(
        <>
         <DivSideBarStyled1>
      <DivSideBarStyled2>
        <StyledButtonAntd onClick={onClick}>
          <DoubleRightOutlined style={{ fontSize: '30px', color: '#fff' }} />
        </StyledButtonAntd>
      </DivSideBarStyled2>
      <DivSideBarStyled3 padingX={isRoleVip ? '12px' : '24px'}>
        <MenuButtonSideBarLess 
          active={router.pathname === UrlPath.home.url}
          href={UrlPath.home.url}
          icon={
            <HomeIcon
              light={router.pathname === UrlPath.home.url ? 1 : 0}
              color={COLOR.PRIMARY.BLACK}
            />
          }>
        </MenuButtonSideBarLess>
        {isRoleVip && (
          <MenuButtonTemp
            onClickMenuButtonTemp={handleClickDeviceMenuButton}
            icon={<DeviceIcon />}
          >
            {toggleCaret ? <CaretUpOutlined /> : <CaretDownOutlined />}
          </MenuButtonTemp>
        )}
        {isActiveDeivce && (
          <div>
            <MenuChildrenButton
              active={router.pathname === UrlPath.device.url}
              href={UrlPath.device.url}
              icon={
                <ListIcon
                  width={'1.5em'}
                  height={'1.5em'}
                  color={COLOR.BLUE[3]}
                  light={router.pathname === UrlPath.device.url ? 1 : 0}
                />
              }
            ></MenuChildrenButton>
            </div>
            )
        }
         {isRoleVip && (
            <MenuButtonSideBarLess
              active={router.pathname === UrlPath.account.url}
              href={UrlPath.account.url}
              icon={
                <AccountIcon
                  heigh={'1.5em'}
                  width={'1.5em'}
                  light={router.pathname === UrlPath.account.url ? 1 : 0}
                  colorBefore={'#3a416f'}
                  colorAfter={'#fff'}
                />
              }
            >
              {UrlPath.account.title}
            </MenuButtonSideBarLess>
          )}

        

          <MenuButtonSideBarLess
            active={router.pathname === UrlPath.help.url}
            href={UrlPath.help.url}
            icon={
              <HelpIcon light={router.pathname === UrlPath.help.url ? 1 : 0} />
            }
          >
            {UrlPath.help.title}
          </MenuButtonSideBarLess>

        </DivSideBarStyled3>

      </DivSideBarStyled1>
        </>
    )

}
export default memo(SideBarLess)