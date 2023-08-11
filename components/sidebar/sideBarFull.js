import { memo, useState, useEffect } from 'react'
import { Image } from 'antd'
import { RoleEnum } from '../../shares/role'
import { useRouter } from 'next/router'
import { UrlPath } from '../../type/urlPath'
import {
  CaretDownOutlined,
  CaretUpOutlined,
  DoubleLeftOutlined
} from '@ant-design/icons'
import Cookies from 'js-cookie'
import { StyledButtonAntd } from '../styled/styledListOfDevice/styledComponent'
import {
  DivSideBarStyled1,
  DivSideBarStyled2,
  DivSideBarStyled3
} from '../styled/styledListOfSideBar/styledListOfSideBar'
import HomeIcon from '../icons/homeIcon'
import DeviceIcon from '../icons/deviceIcon'
import HelpIcon from '../icons/helpIcon'
import ListIcon from '../icons/listIcon'
import AccountIcon from '../icons/accountIcon'
import MenuButtonSideBarFull from './menuButtonSideBarFull'
import MenuButtonTemp from './menuButtonTemp'
import MenuChildrenButton from './menuChildrenButton'
import COLOR from '../../utils/color'
import Motoricon from '../icons/Motoricon'
import Caricon from '../icons/Caricon'
import ExitSideIcon from '../icons/ExitSideIcon'
import MonthTicket from '../icons/MonthTicket'

function SideBarFull({ onClick }) {
  const logo = '/images/logoauth.png'
  const router = useRouter()
  const [isRoleVip, setIsRoleVip] = useState()
  const [isRoleAdmin, setIsRoleAdmin] = useState()
  const [isActiveParkingPage, setIsActiveParkingPage] = useState()
  const [role, setRole] = useState(0)
  const [isActiveDeivce, setIsActiveDevice] = useState(false)
  const [isActive, setIsActive] = useState(false)
  const [toggleCaret, setToggleCaret] = useState(false)
  const [parkingCodeee, setParkingCode] = useState()
  useEffect(() => {
    setRole(parseInt(Cookies.get('role')))
    // setAdminImei(sessionStorage.getItem('deviceImei'))
    setParkingCode(sessionStorage.getItem('parkingCode'))
    setIsRoleVip(role === RoleEnum.superAdmin)
    setIsRoleAdmin(role === RoleEnum.admin)
    setIsActiveParkingPage(
      router.pathname === `${UrlPath.parkingCode.url}[parking]` ||
        router.pathname === `${UrlPath.parkingCode.url}/sendMoto` ||
        router.pathname === `${UrlPath.parkingCode.url}/sendCar` ||
        router.pathname === `${UrlPath.parkingCode.url}[parking]/revenue` ||
        router.pathname === `${UrlPath.parkingCode.url}/forParking`
    )
  })
  const handleClickDeviceMenuButton = () => {
    setIsActiveDevice(!isActiveDeivce)
    setToggleCaret(!toggleCaret)
  }
  const handleClickMenuButton = () => {
    setIsActive(!isActive)
    setToggleCaret(!toggleCaret)
  }
  return (
    <>
      <DivSideBarStyled1>
        <DivSideBarStyled2>
          <Image
            onClick={onClick}
            preview={false}
            width={'170px'}
            src={logo}
            alt="logo"
            style={{
              cursor: 'pointer',
              marginLeft: '15px',
              marginTop: '-10px'
            }}
          />
          <StyledButtonAntd onClick={onClick}>
            <DoubleLeftOutlined
              style={{
                fontSize: '18px',
                marginTop: '6px',
                color: '#fff'
              }}
            />
          </StyledButtonAntd>
        </DivSideBarStyled2>
        <DivSideBarStyled3 padingX={'12px'}>
          <MenuButtonSideBarFull
            active={router.pathname === UrlPath.home.url}
            href={UrlPath.home.url}
            icon={
              <HomeIcon
                light={router.pathname === UrlPath.home.url ? 1 : 0}
                color={COLOR.PRIMARY.BLACK}
              />
            }
          >
            {UrlPath.home.title}
          </MenuButtonSideBarFull>
          {isRoleVip && ( <MenuButtonSideBarFull
            active={router.pathname === UrlPath.device.url }
            href={UrlPath.device.url}
            icon={
              <DeviceIcon
                light={router.pathname ===
                  UrlPath.device.url
                    ? 1
                    : 0}
                color={COLOR.PRIMARY.BLACK}
              />
            }
          >
             Manage Parking
          </MenuButtonSideBarFull>
          )}
          {isRoleAdmin && (
            <MenuButtonTemp
              marginLeft={'10px'}
              onClickMenuButtonTemp={handleClickDeviceMenuButton}
              icon={<DeviceIcon />}
            >
              Driver Management
              {toggleCaret ? (
                <CaretUpOutlined style={{ marginLeft: '4px' }} />
              ) : (
                <CaretDownOutlined style={{ marginLeft: '4px' }} />
              )}
            </MenuButtonTemp>
          )}
            {/* {isActive && (
            <div>
              <MenuChildrenButton
                active={
                  router.pathname === UrlPath.device.url
                }
                href={UrlPath.device.url}
                icon={
                  <ListIcon
                    width={'1.5em'}
                    height={'1.5em'}
                    light={
                      router.pathname ===
                      UrlPath.device.url
                        ? 1
                        : 0
                    }
                  />
                }
              >
                List Parking
              </MenuChildrenButton>
              </div>
              )} */}
          {isActiveDeivce && (
            <div>
                 <MenuChildrenButton
                active={
                  router.pathname ===
                  `${UrlPath.parkingCode.url}sendMoto`
                }
                href={`${UrlPath.parkingCode.url}sendMoto`}
                icon={
                  <Motoricon
                    width={'1.5em'}
                    height={'1.5em'}
                    light={
                      router.pathname ===
                      `${UrlPath.parkingCode.url}sendMoto`
                        ? 1
                        : 0
                    }
                  />
                }
              >
                Motorbike In 
              </MenuChildrenButton>
              <MenuChildrenButton
                active={
                  router.pathname ===
                  `${UrlPath.parkingCode.url}sendCar`
                }
                href={`${UrlPath.parkingCode.url}sendCar`}
                icon={
                  <Caricon
                    width={'1.5em'}
                    height={'1.5em'}
                    light={
                      router.pathname ===
                      `${UrlPath.parkingCode.url}sendCar`
                        ? 1
                        : 0
                    }
                  />
                }
              >
                Car In
              </MenuChildrenButton>
              
           
              <MenuChildrenButton
                active={
                  router.pathname ===
                  `${UrlPath.parkingCode.url}outMoto`
                }
                href={`${UrlPath.parkingCode.url}outMoto`}
                icon={
                  <ExitSideIcon
                    width={'1.5em'}
                    height={'1.5em'}
                    light={
                      router.pathname ===
                      `${UrlPath.parkingCode.url}outMoto`
                        ? 1
                        : 0
                    }
                  />
                }
              >
                Vehicle out
              </MenuChildrenButton>
      
              <MenuChildrenButton
                active={
                  router.pathname ===
                  `${UrlPath.parkingCode.url}forParking`
                }
                href={`${UrlPath.parkingCode.url}forParking`}
                icon={
                  <ListIcon
                    width={'1.5em'}
                    height={'1.5em'}
                    light={
                      router.pathname ===
                      `${UrlPath.parkingCode.url} forParking`
                        ? 1
                        : 0
                    }
                  />
                }
              >
                Vehicle In Parking
              </MenuChildrenButton>
            </div>
          )}

          {/* {isRoleVip && (
            <MenuButtonSideBarFull
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
            </MenuButtonSideBarFull>
          )} */}
          {isRoleVip && (
            <MenuButtonSideBarFull
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
            </MenuButtonSideBarFull>
          )}
          {isRoleAdmin&&(
          <MenuButtonSideBarFull
            active={
              router.pathname === `${UrlPath.parkingCode.url}registerMonthTicket`
            }
            href={`${UrlPath.parkingCode.url}registerMonthTicket`}
            icon={
              <MonthTicket  
                width={'1.5em'}
                height={'1.5em'}
                light={
                  router.pathname ===
                  `${UrlPath.parkingCode.url}registerMonthTicket`
                    ? 1
                    : 0
                }
              />
            }
          >
            Register Month Ticket
          </MenuButtonSideBarFull>
          )}
          {/* <MenuButtonSideBarFull
            active={router.pathname === UrlPath.help.url}
            href={UrlPath.help.url}
            icon={
              <HelpIcon light={router.pathname === UrlPath.help.url ? 1 : 0} />
            }
          >
            Announcement
          </MenuButtonSideBarFull> */}
        </DivSideBarStyled3>
      </DivSideBarStyled1>
    </>
  )
}
export default memo(SideBarFull)
