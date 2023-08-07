import { Button, Col, Drawer, Image, Row } from 'antd'
import { Header } from 'antd/lib/layout/layout'
import { useAtom } from 'jotai'
import { memo, useState } from 'react'
import styled from 'styled-components'
import { modalAddUserIconAtom } from '../../atom/store'
import AddUserIcon from '../../icons/addUserIcon'
import ButtonIcon from '../../icons/buttonIcon'
import RightMenu from './rightMenu'

const StyledButtonAnt = styled(Button)`
  float: right;
  height: 32px;
  padding: 6px;
  margin-top: 8px;
  display: none;
  background: #f0f2f5;
  outline: none;
  box-shadow: none;
  border: none;
  margin-top: 16px;
  :active {
    outline: none;
    border: none;
  }
  :hover {
    outline: none;
    border: none;
    background-color: #fff;
  }
  @media (max-width: 768px) {
    display: block;
  }
`
const HeaderStyled = styled(Header)`
  z-index: 1;
  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
  }
`
const StyledDivRightMenu = styled.div`
  float: right;
  @media (max-width: 768px) {
    display: none;
  }
`
const StyledDivLogoMenu = styled.div`
  width: 180px;
  float: left;

  @media (max-width: 576px) {
    position: absolute;
    display: none;
    left: 50%;

    transform: translate(-50%, 0);
    /* left: 50%; */
  }
`
const StyledDivMenu = styled.div`
  @media (max-width: 576px) {
    position: absolute;
    right: 110%;
  }
`
const StyledDivAddUserIconMenu = styled.div`
  display: none;
  @media (max-width: 576px) {
    display: block;
    position: absolute;
    left: 105%;
    top: 14px;
  }
`
const AuthHeader = () => {
  const [open, setOpen] = useState(false)
  const [, setOpenModalLogin] = useAtom(modalAddUserIconAtom)

  const showDrawer = () => {
    setOpen(true)
  }
  const onClose = () => {
    setOpen(false)
  }
  const handleClickAddUserIcon = () => {
    setOpenModalLogin(true)
  }
  return (
    <>
      <HeaderStyled
        style={{
          backgroundColor: '#f0f2f5'
        }}
      >
        <Row justify="center">
          <Col span={21}>
            <div style={{ flexDirection: 'Row' }}>
              <StyledDivMenu>
                <StyledDivRightMenu>
                  <RightMenu />
                </StyledDivRightMenu>
                <StyledButtonAnt type="primary" onClick={showDrawer}>
                  <ButtonIcon />
                </StyledButtonAnt>
                <Drawer
                  title="Dparking"
                  placement="right"
                  onClose={onClose}
                  open={open}
                  width={220}
                >
                  <RightMenu />
                </Drawer>
              </StyledDivMenu>
              <StyledDivLogoMenu style={{ marginTop: '-17px' }}>
                <Image
                  src="/images/logoauth.png"
                  alt="logo Dparking"
                  preview={false}
                />
              </StyledDivLogoMenu>
              <StyledDivAddUserIconMenu onClick={handleClickAddUserIcon}>
                <AddUserIcon width={'40em'} height={'40em'} />
              </StyledDivAddUserIconMenu>
            </div>
          </Col>
        </Row>
      </HeaderStyled>
    </>
  )
}
export default memo(AuthHeader)
