import { Typography } from 'antd'
import Link from 'next/link'

const MenuButtonSideBarOverlay = ({ active, children, href }) => {
  return (
    <>
      <Link href={href}>
        <div
          style={{
            borderRadius: '8px',
            padding: '10px',
            display: 'flex',
            height: '60px',
            alignItems: 'center',
            marginBottom: '10px',
            cursor: 'pointer'
          }}
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
        </div>
      </Link>
    </>
  )
}

export default MenuButtonSideBarOverlay
