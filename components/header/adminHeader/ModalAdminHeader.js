import { Modal } from 'antd'
import { memo, useRef, useState } from 'react'
import { StyledButtonAntd } from '../../styled/styledListOfDevice/styledComponent'
import FormChangePass from './formChangePass'

const ModalAdminHeader = () => {
  const [open, setOpen] = useState(false)
  const [, setLoading] = useState()
  const FormChangePassRef = useRef()
  const showModal = () => {
    setOpen(true)
  }
  const handleOk = () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setOpen(false)
    }, 3000)
  }
  const handleCancel = () => {
    setOpen(false)
  }

  return (
    <>
      <StyledButtonAntd ref={FormChangePassRef} onClick={showModal}>
        Reset Password
      </StyledButtonAntd>
      <Modal
        open={open}
        title=" ---Enter old and new password---"
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[]}
        width={'300px'}
        closable={false}
      >
        <FormChangePass />
      </Modal>
    </>
  )
}
export default memo(ModalAdminHeader)
