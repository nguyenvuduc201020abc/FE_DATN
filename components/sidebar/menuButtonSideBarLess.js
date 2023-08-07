import Link from 'next/link'
import COLOR from '../../utils/color'

const MenuButtonSideBarLess = ({ active, icon, href }) => {
  return (
    <>
      <Link href={href}>
        <div
          style={{
            display: 'flex',
            height: '60px',
            alignItems: 'center',
            marginBottom: '10px'
          }}
        >
          <div
            style={{
              padding: '10px',
              backgroundColor: active ? COLOR.THAN[1] : COLOR.GRAY[3],
              borderRadius: '8px'
              // boxShadow: `1px 5px 6px ${COLOR.GRAY[2]}`
            }}
          >
            {icon}
          </div>
        </div>
      </Link>
    </>
  )
}

export default MenuButtonSideBarLess
