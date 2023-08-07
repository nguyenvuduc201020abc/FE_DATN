import { memo } from 'react'
import COLOR from '../../utils/color'

const AccountIcon = (prop) => {
  return (
    <>
      <svg
        width={prop.width}
        color={prop.color}
        height={prop.height}
        fill="none"
        viewBox="0 0 1024 1024"
        version="1.1"
      >
        <g>
          <path
            fill={prop.light ? prop.colorAfter : prop.colorBefore}
            d="M500,10C229.3,10,10,229.3,10,500c0,270.7,219.3,490,490,490c270.7,0,490-219.3,490-490C990,229.3,770.7,10,500,10z M500,157c81.1,0,147,65.9,147,147c0,81.3-65.9,147-147,147c-81.1,0-147-65.7-147-147C353,222.9,418.9,157,500,157z M500,852.8c-122.7,0-230.5-62.7-294-157.8c1.2-97.3,196.2-150.9,294-150.9c97.8,0,292.5,53.7,294,150.9C730.5,790.1,622.7,852.8,500,852.8z"
          />
        </g>
      </svg>
    </>
  )
}

export default memo(AccountIcon)
