import { Typography } from 'antd'

const MenuButtonTempSidebarOverlay = ({
  children,
  onClickMenuButtonTemp,
  active
}) => {
  return (
    <>
      <span
        style={{
          borderRadius: '8px',
          marginLeft: '10px',
          display: 'flex',
          height: '60px',
          alignItems: 'center',
          marginBottom: '10px',
          cursor: 'pointer'
        }}
        onClick={onClickMenuButtonTemp}
      >
        <Typography
          style={{
            lineHeight: '16px',
            fontSize: '14px',
            fontWeight: '600',
            marginLeft: '12px',
            color: active ? '#91caff' : '#fff'
          }}
        >
          {children}
        </Typography>
      </span>
    </>
  )
}

export default MenuButtonTempSidebarOverlay
