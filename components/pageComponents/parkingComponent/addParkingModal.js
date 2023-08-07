import { memo, useState } from "react"
import FormAddParking from "./formAddParking"
import { Button, Modal } from "antd"

const AddParkingModal = () => {
    const [isLoading, setLoading]= useState(false)
    const [open, setOpen] = useState(false)
    const showModal = () => {
      setOpen(true)
    }
    const handleOk = () => {
        setLoading(true)
        setTimeout(()=>{
            setOpen(false)
            setLoading(false)
        },3000)

    }
    const handleCancel=() =>{
        setOpen(false)
    }
    return(
        <>
        <Button onClick={showModal}>Add Parking</Button>
        <Modal
        open={open}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[]}
        width={'450px'}>

        <FormAddParking/>
        </Modal>
        </>
    )
}
export default memo(AddParkingModal)