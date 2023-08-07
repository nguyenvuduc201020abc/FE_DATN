import { Button, Modal } from 'antd'
import React, { memo, useState } from 'react'
import FormAddAccount from './formAddAccount'

const AddAccountModal = () => {
  const [, setLoading] = useState(false)
  const [open, setOpen] = useState(false)
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
      <Button onClick={showModal}>Thêm tài khoản </Button>
      <Modal
        open={open}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[]}
        width={'400px'}
      >
        <FormAddAccount />
      </Modal>
    </>
  )
}

export default memo(AddAccountModal)
