import COLOR from '../../utils/color'

const ListIcon = (prop) => {
  return (
    <>
      <svg
        width={prop.width}
        height={prop.height}
        color={prop.color}
        fill="currentColor"
        viewBox="0 0 1024 1024"
      >
        <path
          fill={prop.light ? COLOR.PRIMARY.WHITE : `#3a416f`}
          d="M192 224c0 35.36-28.64 64-64 64L64 288C28.64 288 0 259.36 0 224L0 160c0-35.36 28.64-64 64-64l64 0c35.36 0 64 28.64 64 64L192 224z"
        />
        <path
          fill={prop.light ? COLOR.PRIMARY.WHITE : `#3a416f`}
          d="M192 544c0 35.328-28.64 64-64 64L64 608c-35.36 0-64-28.672-64-64l0-64c0-35.36 28.64-64 64-64l64 0c35.36 0 64 28.64 64 64L192 544z"
        />
        <path
          fill={prop.light ? COLOR.PRIMARY.WHITE : `#3a416f`}
          d="M192 864c0 35.328-28.64 64-64 64L64 928c-35.36 0-64-28.672-64-64l0-64c0-35.36 28.64-64 64-64l64 0c35.36 0 64 28.64 64 64L192 864z"
        />
        <path
          fill={prop.light ? COLOR.PRIMARY.WHITE : `#3a416f`}
          d="M1024 224c0 35.36-28.64 64-64 64L384 288c-35.36 0-64-28.64-64-64L320 160c0-35.36 28.64-64 64-64l576 0c35.36 0 64 28.64 64 64L1024 224z"
        />
        <path
          fill={prop.light ? COLOR.PRIMARY.WHITE : `#3a416f`}
          d="M1024 544c0 35.328-28.64 64-64 64L384 608c-35.36 0-64-28.672-64-64l0-64c0-35.36 28.64-64 64-64l576 0c35.36 0 64 28.64 64 64L1024 544z"
        />
        <path
          fill={prop.light ? COLOR.PRIMARY.WHITE : `#3a416f`}
          d="M1024 864c0 35.328-28.64 64-64 64L384 928c-35.36 0-64-28.672-64-64l0-64c0-35.36 28.64-64 64-64l576 0c35.36 0 64 28.64 64 64L1024 864z"
        />
      </svg>
    </>
  )
}

export default ListIcon
