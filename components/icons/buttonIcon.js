import { memo } from 'react'

function ButtonIcon() {
  return (
    <>
      <svg
        version="1.1"
        width="1em"
        height="1em"
        fill="currentColor"
        viewBox="0 0 1024 1024"
        enableBackground="new 0 0 1000 1000"
        xmlSpace="preserve"
        color="black"
      >
        <g color="black">
          <path d="M10,132.5v163.3h980V132.5H10z M10,581.7h980V418.3H10V581.7z M10,867.5h980V704.2H10V867.5z" />
        </g>
      </svg>
    </>
  )
}

export default memo(ButtonIcon)
