import { Button, Modal } from 'antd'
import React, { memo, useState } from 'react'
import FormAddVehicle from './formAddVehicle'

const AddVehicleModal = () => {
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
      <Button onClick={showModal}>Add vehicle to parking </Button>
      <Modal
        open={open}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[]}
        width={'350px'}
      >
        <FormAddVehicle />
      </Modal>
    </>
  )
}

export default memo(AddVehicleModal)
