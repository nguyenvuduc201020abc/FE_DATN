import { MenuOutlined } from '@ant-design/icons'
import { useRouter } from 'next/router'
import { memo } from 'react'
import { Swap } from 'server-side-media-queries-for-react'
import { UrlPath } from '../../type/urlPath'

import RightMenuAdmin from '../header/adminHeader/rightMenuAdmin'

const HeaderBar = ({ onToggleSidebar }) => {
  const getTitle = (url) => {
    switch (url) {
      case UrlPath.home.url: {
        return UrlPath.home.title
      }
      case `${UrlPath.device.url}`: {
        return UrlPath.device.title
      }
    
      case UrlPath.account.url: {
        return UrlPath.account.title
      }
      case UrlPath.help.url: {
        return UrlPath.help.title
      }
      case UrlPath.sendMoto.url: {
        return UrlPath.sendMoto.title
      }
      case UrlPath.sendCar.url: {
        return UrlPath.sendCar.title
      }  
      case UrlPath.outMoto.url: {
        return UrlPath.outMoto.title
      }
      case UrlPath.forParking.url: {
        return UrlPath.forParking.title
      }
      case UrlPath.registerMonthTicket.url: {
        return UrlPath.registerMonthTicket.title
      }
      
    
    }
  }
  const router = useRouter()
  return (
    <>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Swap
          match={[
            ['(min-width: 768px)', <></>],
            [
              'default',
              <MenuOutlined
                key={2}
                onClick={onToggleSidebar}
                style={{ color: '#fff', marginRight: '2px' }}
              />
            ]
          ]}
        />
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            flexGrow: 1
          }}
        >
          <div>
            <span
              style={{
                fontSize: '16px',
                fontWeight: 'bold',
                color: '#fff',
                // marginLeft: '0px',
                cursor: 'default'
              }}
            >
              {getTitle(router.pathname)}
            </span>
          </div>
        </div>
        <RightMenuAdmin />
      </div>
    </>
  )
}
export default memo(HeaderBar)
