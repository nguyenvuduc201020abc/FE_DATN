import { memo } from 'react'
import COLOR from '../../utils/color'

const ExitSideIcon = (prop) => {
  return (
    <>
      <svg
        width="1.5em"
        height="1.5em"
        fill="none"
        id="Layer_1"
        enable-background="new 0 0 20 20"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        color={prop.color}
      >
        <g>
          <g fill="rgb(0,0,0)">
            <path
              fill={prop.light ? COLOR.PRIMARY.WHITE : `#3a416f`}
              d="m16 6-1.5 1.4 1.7 1.6h-8.2v2h8.2l-1.7 1.6 1.5 1.4 4-4z"
            />
            <path
              fill={prop.light ? COLOR.PRIMARY.WHITE : `#3a416f`}
              d="m4.1 14.9c-1.4-1.3-2.1-3-2.1-4.9s.7-3.6 2.1-4.9c2.7-2.7 7.2-2.7 9.9 0l1.4-1.4c-3.5-3.5-9.2-3.5-12.7 0-1.8 1.6-2.7 3.9-2.7 6.3s.9 4.7 2.6 6.4c1.8 1.7 4.1 2.6 6.4 2.6s4.6-.9 6.4-2.6l-1.4-1.5c-2.8 2.8-7.2 2.8-9.9 0z"
            />
          </g>
        </g>
      </svg>
    </>
  )
}

export default memo(ExitSideIcon)