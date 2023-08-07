import { Typography } from 'antd'
import styled from 'styled-components'
import COLOR from '../../utils/color'

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
const MenuButtonTemp = ({
  icon,
  children,
  onClickMenuButtonTemp,
  marginLeft
}) => {
  return (
    <>
      <span
        id="1234"
        style={{
          borderRadius: '8px',
          marginLeft: marginLeft,
          display: 'flex',
          height: '60px',
          alignItems: 'center',
          marginBottom: '10px',
          cursor: 'pointer'
        }}
        onClick={onClickMenuButtonTemp}
      >
        <div
          style={{
            padding: '10px',
            backgroundColor: COLOR.PRIMARY.WHITE,
            borderRadius: '8px'
            // boxShadow: `1px 5px 6px ${COLOR.GRAY[2]}`
          }}
        >
          {icon}
        </div>

        <TypographyStyled>{children}</TypographyStyled>
      </span>
    </>
  )
}

export default MenuButtonTemp
