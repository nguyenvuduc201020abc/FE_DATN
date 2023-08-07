import { memo } from 'react'
import COLOR from '../../utils/color'

const HelpIcon = (prop) => {
  return (
    <>
      <svg
        width="1.5em"
        height="1.5em"
        fill="none"
        viewBox="0 0 1024 1024"
        version="1.1"
      >
        <g>
          <path
            fill={prop.light ? COLOR.PRIMARY.WHITE : `#3a416f`}
            d="M500,10C229.4,10,10,229.4,10,500s219.4,490,490,490c270.6,0,490-219.4,490-490S770.6,10,500,10z M576.1,745H461.8v-89.3h114.4V745z M609.2,544.4c-24.7,19.6-35,23.2-35,68.8h-114c0-60.8,2.5-84,43.2-115.9c22.2-17.4,35.6-28.3,35.6-54.2c0-49.4-20.1-58.5-44.2-58.5c-32.1,0-48.2,24.1-50.5,47.5v0.6H336.7c0-110.2,101.9-177.7,164.5-177.7c68.6,0,162.2,40.3,162.2,164.4C663.3,470.8,653.4,509.6,609.2,544.4z"
          />
        </g>
      </svg>
    </>
  )
}

export default memo(HelpIcon)
