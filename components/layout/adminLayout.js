import { Layout } from 'antd'
import { useAtom } from 'jotai'
import { memo, useCallback, useState } from 'react'
import { Swap } from 'server-side-media-queries-for-react'
import styled from 'styled-components'
import COLOR from '../../utils/color'
import { toggleSidebarAtom } from '../atom/store'
import SideBarFull from '../sidebar/sideBarFull'
import SideBarLess from '../sidebar/SideBarLess'
//import SideBarOverlay from '../sidebar/sideBarOverlay'
import HeaderBar from './headerBar'
const { Header, Content, Footer, Sider } = Layout
const HeaderStyled = styled(Header)`
  height: 76px;
  z-index: 10;
  position: fixed;
  top: 0;
  width: -webkit-fill-available;
  @media (max-width: 576px) {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
  }
`
const FooterStyled = styled(Footer)`
  height: 76px;
  z-index: 9;

  @media (max-width: 576px) {
    position: fixed;
    right: 0;
    left: 0;
    bottom: 0;
  }
`
const ContentStyledAnt = styled(Content)`
  margin-top: 64px;
  // background-color: #ccc;
`
const AdminLayout = ({ children }) => {
  const [isSideBarLess, setSideBarLess] = useState(false)
  const [isSideBarOverlay, setSideBarOverlay] = useAtom(toggleSidebarAtom)

  const handleClickSideBarLess = useCallback(() => {
    setSideBarLess(false)
  }, [])
  const handleClickSideBarFull = useCallback(() => {
    setSideBarLess(true)
  }, [])
  const handleClickSideBarOverlay = useCallback(() => {
    setSideBarOverlay((pre) => !pre)
  }, [])
  const handleToggleSidebar = useCallback(() => {
    setSideBarOverlay((pre) => !pre)
  }, [])

  return (
    <>
      <Layout style={{ minHeight: '100%', backgroundColor: '#3260A9' }}>
        <Swap
          match={[
            [
              '(min-width: 768px)',
              <Sider
                key={1}
                width={isSideBarLess ? 91 : 216}
                theme="light"
                style={{
                  backgroundColor: '#3260A9'
                }}
              >
                {isSideBarLess ? (
                  <SideBarLess onClick={handleClickSideBarLess} />
                ) : (
                  <SideBarFull onClick={handleClickSideBarFull} />
                )}
              </Sider>
            ],
            ['default', <></>]
          ]}
        />

        <Layout style={{ backgroundColor: COLOR.GRAY[1], minHeight: '100vh' }}>
          <HeaderStyled style={{ backgroundColor: "#517A9A" }}>
            <HeaderBar onToggleSidebar={handleToggleSidebar} />
          </HeaderStyled>
          <ContentStyledAnt>{children}</ContentStyledAnt>
          <FooterStyled
            style={{
              backgroundColor: "",
              color: '#fff'
            }}
          >
            
          </FooterStyled>
        </Layout>
      </Layout>
    </>
  )
}
export default memo(AdminLayout)
