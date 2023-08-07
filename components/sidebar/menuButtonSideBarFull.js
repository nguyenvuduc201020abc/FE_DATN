import { Typography } from 'antd'
import Link from 'next/link'
import styled from 'styled-components'
import COLOR from '../../utils/color'

const DivStyled = styled.div`
  display: flex;
  height: 60px;
  align-items: center;
  margin-bottom: 10px;
  cursor: pointer;
  margin-left: 10px;
`

const TypographyStyled = styled(Typography)`
  line-height: 16px;
  font-size: 14px;
  font-weight: 600;
  margin-left: 12px;
  color: #fff;
  :hover {
    color: #91caff;
  }
`

const MenuButtonSideBarFull = ({ active, children, icon, href }) => {
  return (
    <>
      <Link href={href}>
        <DivStyled>
          <div
            style={{
              padding: '10px',
              backgroundColor: active ? COLOR.THAN[1] : COLOR.PRIMARY.WHITE,
              borderRadius: '8px'
              // boxShadow: `1px 5px 6px ${COLOR.GRAY[3]}`
            }}
          >
            {icon}
          </div>

          <TypographyStyled>{children}</TypographyStyled>
        </DivStyled>
      </Link>
    </>
  )
}

export default MenuButtonSideBarFull
