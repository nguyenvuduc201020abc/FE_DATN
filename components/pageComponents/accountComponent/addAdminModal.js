import { Button, Modal } from 'antd'
import { useState } from 'react'
import FormAddAdmin from './formAddAdmin'

const AddAdminModal = () => {
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
      <Button onClick={showModal}>Add employee </Button>
      <Modal
        open={open}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[]}
        width={'400px'}
      >
        <FormAddAdmin />
      </Modal>
    </>
  )
}

export default AddAdminModal
