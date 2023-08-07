import { Modal } from 'antd'
import { useAtom } from 'jotai'
import React, { memo, useState } from 'react'

import { modalAddUserIconAtom } from '../../atom/store'
import { StyledButtonPressedEffect } from '../../styled/styledListOfDevice/styledComponent'

import FormLogin from './formLogin'
const ModalAuthHeader = () => {
  const [, setLoading] = useState(false)
  const [open, setOpen] = useAtom(modalAddUserIconAtom)

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
      <StyledButtonPressedEffect onClick={showModal} type="primary">
        Login
      </StyledButtonPressedEffect>

      <Modal
        open={open}
        // title="Nhập Thông Tin Đăng Nhập"
        onOk={handleOk}
        onCancel={handleCancel}
        width={'320px'}
        footer={[]}
        closable={false}
      >
        <FormLogin />
      </Modal>
    </>
  )
}

export default memo(ModalAuthHeader)
