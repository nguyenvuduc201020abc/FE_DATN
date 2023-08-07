import { Typography } from 'antd'
import Link from 'next/link'

const MenuChildrenButtonSideBarOverlay = ({ children, href, active }) => {
  return (
    <>
      <Link href={href}>
        <div
          style={{
            display: 'flex',
            height: '30px',
            alignItems: 'center',
            marginBottom: '10px',
            cursor: 'pointer',
            marginLeft: '30px'
          }}
        >
          <Typography
            style={{
              lineHeight: '12px',
              fontSize: '12px',
              fontWeight: '500',
              marginLeft: '8px',
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

export default MenuChildrenButtonSideBarOverlay
