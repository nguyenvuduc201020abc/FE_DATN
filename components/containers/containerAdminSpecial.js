import { DoubleRightOutlined } from '@ant-design/icons'
import { Col, Row } from 'antd'
import Cookies from 'js-cookie'
import { useRouter } from 'next/router'
import React, { memo, useEffect, useState } from 'react'
import styled from 'styled-components'
import { RoleEnum } from '../../shares/role'
import { UrlPath } from '../../type/urlPath'
import ReloadIcon from '../icons/reloadIcon'

const SpanStyled = styled.span`
  font-weight: 500;
  font-size: 14px;
  cursor: pointer;
  :hover {
    color: #1677ff;
  }
`
const ContainerAdminSpecial = ({ children, backgroundColor }) => {
  const [role, setRole] = useState(0)
  const [isRoleVip, setIsRoleVip] = useState()
  const [isActiveDevicePage, setIsActiveDevicePage] = useState()
  const [isActiveWifiPage, setIsActiveWifiPage] = useState()
  const [isActiveEthernetPage, setIsActiveEthernetPage] = useState()
  const [isActiveLte4gPage, setIsActiveLte4gPage] = useState()
  const [isActiveGpsPage, setIsActiveGpsPage] = useState()
  const [adminImei, setAdminImei] = useState('')

  const router = useRouter()

  const handleClickDevicePage = (e) => {
    e.preventDefault()
    router.push(UrlPath.device.url)
  }
  const handleClickDeviceIdPage = (e) => {
    e.preventDefault()
    router.push(`${UrlPath.deviceId.url}${adminImei}`)
  }
  useEffect(() => {
    setAdminImei(sessionStorage.getItem('deviceImei'))
    router.prefetch(UrlPath.deviceId.url)
    router.prefetch(`${UrlPath.deviceId.url}${adminImei}`)
  }, [])

  useEffect(() => {
    setRole(parseInt(Cookies.get('role')))
    setIsRoleVip(role === RoleEnum.superAdmin || role === RoleEnum.admin)
    setIsActiveDevicePage(router.pathname === UrlPath.device.url)
    setIsActiveWifiPage(
      router.pathname === `${UrlPath.deviceId.url}[deviceId]/wifi`
    )
    setIsActiveEthernetPage(
      router.pathname === `${UrlPath.deviceId.url}[deviceId]/ethernet`
    )
    setIsActiveLte4gPage(
      router.pathname === `${UrlPath.deviceId.url}[deviceId]/lte4g`
    )
    setIsActiveGpsPage(
      router.pathname === `${UrlPath.deviceId.url}[deviceId]/gps`
    )
  })
  return (
    <>
      <Row justify="end" style={{ backgroundColor: backgroundColor }}>
        <Col
          span={23}
          style={{
            marginTop: '20px',
            marginBottom: '20px',
            marginRight: '12px'
          }}
        >
          {isRoleVip && (
            <Row style={{ marginBottom: '10px' }}>
              <Col>
                {isActiveDevicePage && (
                  <SpanStyled onClick={() => router.reload()}>
                    Danh sách thiết bị
                    <ReloadIcon
                      style={{ marginLeft: '10px' }}
                      width={'13px'}
                      height={'13px'}
                    />
                  </SpanStyled>
                )}
              </Col>
              <Col>
                {isActiveWifiPage && (
                  <div>
                    <SpanStyled onClick={handleClickDevicePage}>
                      Danh sách thiết bị
                    </SpanStyled>
                    <DoubleRightOutlined style={{ margin: '0 2px 0 4px' }} />
                    <SpanStyled onClick={handleClickDeviceIdPage}>
                      Thông tin thiết bị
                    </SpanStyled>
                    <DoubleRightOutlined style={{ margin: '0 2px 0 4px' }} />
                    <SpanStyled>Thông tin Wifi</SpanStyled>
                  </div>
                )}
              </Col>
              <Col>
                {isActiveEthernetPage && (
                  <div>
                    <SpanStyled onClick={handleClickDevicePage}>
                      Danh sách thiết bị
                    </SpanStyled>
                    <DoubleRightOutlined style={{ margin: '0 2px 0 4px' }} />
                    <SpanStyled onClick={handleClickDeviceIdPage}>
                      Thông tin thiết bị
                    </SpanStyled>
                    <DoubleRightOutlined style={{ margin: '0 2px 0 4px' }} />
                    <SpanStyled> Thông tin Ethernet</SpanStyled>
                  </div>
                )}
              </Col>
              <Col>
                {isActiveLte4gPage && (
                  <div>
                    <SpanStyled onClick={handleClickDevicePage}>
                      Danh sách thiết bị
                    </SpanStyled>
                    <DoubleRightOutlined style={{ margin: '0 2px 0 4px' }} />
                    <SpanStyled onClick={handleClickDeviceIdPage}>
                      Thông tin thiết bị
                    </SpanStyled>
                    <DoubleRightOutlined style={{ margin: '0 2px 0 4px' }} />
                    <SpanStyled> Thông tin Lte4g</SpanStyled>
                  </div>
                )}
              </Col>
              <Col>
                {isActiveGpsPage && (
                  <div>
                    <SpanStyled onClick={handleClickDevicePage}>
                      Danh sách thiết bị
                    </SpanStyled>
                    <DoubleRightOutlined style={{ margin: '0 2px 0 4px' }} />
                    <SpanStyled onClick={handleClickDeviceIdPage}>
                      Thông tin thiết bị
                    </SpanStyled>
                    <DoubleRightOutlined style={{ margin: '0 2px 0 4px' }} />
                    <SpanStyled> Thông tin Gps</SpanStyled>
                  </div>
                )}
              </Col>
            </Row>
          )}
          {children}
        </Col>
      </Row>
    </>
  )
}
export default memo(ContainerAdminSpecial)
