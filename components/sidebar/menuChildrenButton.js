import { Typography } from 'antd'
import Link from 'next/link'
import { memo } from 'react'
import styled from 'styled-components'
import COLOR from '../../utils/color'

const TypographyStyled = styled(Typography)`
  line-height: 12px;
  font-size: 12px;
  font-weight: 500;
  margin-left: 8px;
  color: #fff;
  :hover {
    color: #91caff;
  }
`

const MenuChildrenButton = ({ active, children, icon, href }) => {
  return (
    <>
      <Link href={href}>
        <div
          style={{
            display: 'flex',
            height: '40px',
            alignItems: 'center',
            marginBottom: '6px',
            cursor: 'pointer',
            marginLeft: '20px'
          }}
        >
          <div
            style={{
              padding: '6px',
              backgroundColor: active ? COLOR.THAN[1] : '#fff',
              borderRadius: '4px'
              // boxShadow: `1px 5px 6px ${COLOR.GRAY[2]}`
            }}
          >
            {icon}
          </div>

          <TypographyStyled>{children}</TypographyStyled>
        </div>
      </Link>
    </>
  )
}

export default memo(MenuChildrenButton)
