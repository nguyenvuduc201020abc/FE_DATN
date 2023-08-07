import { Alert, Form, Spin, message } from 'antd'
import { useEffect, useState } from 'react'
import {
  StyledBillLisen,
  StyledButtonPressedEffect,
  StyledH2Hepl
} from '../../../styled/styledListOfDevice/styledComponent'
import { useAtom } from 'jotai'
import {
  dataParkingAtom,
  modalbillVisible,
  parkingModalData,
  vehicleBillModalData
} from '../../../atom/store'
import {
  BorderBillStyded,
  BorderBillStyled
} from '../../../styled/HomeStyledComponent/listStyled'
const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!'
  },
  number: {
    range: '${label} must be between ${min} and ${max}'
  }
}
const FormBillVehilce = () => {
  const [form] = Form.useForm()
  const [isLoading, setIsLoading] = useState(false)
  const [billmodalData, setBillModalData] = useAtom(vehicleBillModalData)
  const [parkingCode, setParkingCode] = useState()
  const [lisenseVehicle, setLisenseVehicle] = useState()
  const [username, setUserName] = useState()
  const [entryTime, setEntryTime] = useState()
  const [BillsId, setBillsId] = useState()
  const [timeOut, setTimeOut] = useState()
  const [parking, setParking] = useAtom(dataParkingAtom)

  const [cost, setCost] = useState()
  const [vehicleyType, setVehicleyType] = useState()
  const [imageIn, setImageIn] = useState()
  const [modalVisible, setModalVisible] = useAtom(modalbillVisible)
  const [parkingAddress, setParkingAddress] = useState()
  const onFinish = (values) => {
    setIsLoading(false)
    message.info('In bill thành công')
    setTimeout(() => {
      setModalVisible(false)
    }, 15000)
  }
  useEffect(() => {
    setImageIn(billmodalData.imageIn)
    setEntryTime(billmodalData.entryTime)
    // setEntryTime(billmodalData.entryTime)
    setUserName(billmodalData.username)
    setLisenseVehicle(billmodalData.lisenseVehicle)
    setVehicleyType(billmodalData.vehicleyType)
    setCost(billmodalData.cost)
    setTimeOut(billmodalData.outTime)
    setParkingAddress(parking.parkingAddress)
  })
  useEffect(() => {
    if (
      parkingCode &&
      vehicleyType &&
      username &&
      lisenseVehicle &&
      imageIn &&
      entryTime &&
      outTime
    ) {
      form.setFieldsValue({
        parkingCode,
        vehicleyType,
        parkingAddress,
        cost,
        username,
        lisenseVehicle,
        imageIn,
        entryTime,
        outTime
      })
    }
  }, [parkingCode, lisenseVehicle])
  const onFinishFailed = () => {}
  return (
    <>
      <Spin size="large" spinning={isLoading}>
        <Form
          name="basic"
          form={form}
          layout="vertical"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          validateMessages={validateMessages}
        >
          <h2 style={{ fontSize: '30px', textAlign: 'center' }}>
            Phiếu thanh toán
          </h2>
          <Form.Item
            name="lisenseVehicle"
            style={{ marginBottom: '7px', marginTop: '15px' }}
          >
            <StyledBillLisen>Biển số xe: {lisenseVehicle} </StyledBillLisen>
          </Form.Item>
          <Form.Item name="cost" style={{ marginBottom: '7px' }}>
            <StyledBillLisen>Giá tiền: {cost} </StyledBillLisen>
          </Form.Item>
          <BorderBillStyled>
            <Form.Item name="username" style={{ marginBottom: '7px' }}>
              <p>Tài khoản gửi: {username}</p>
            </Form.Item>
            <Form.Item name="vehicleyType" style={{ marginBottom: '7px' }}>
              <p>Loại xe: {vehicleyType}</p>
            </Form.Item>

            <Form.Item name="entryTime" style={{ marginBottom: '7px' }}>
              <p>Thời gian vào: {entryTime}</p>
            </Form.Item>

            <Form.Item name="outTime" style={{ marginBottom: '7px' }}>
              <p>Thời gian ra: {timeOut}</p>
            </Form.Item>
            <Form.Item name="parkingAddress" style={{ marginBottom: '7px' }}>
              <p>Địa chỉ bãi đỗ: {parkingAddress}</p>
            </Form.Item>
          </BorderBillStyled>
          <Form.Item style={{ textAlign: 'center', paddingTop: '10px' }}>
            <StyledButtonPressedEffect type="primary" htmlType="submit">
              In Bill
            </StyledButtonPressedEffect>
          </Form.Item>
        </Form>
      </Spin>
    </>
  )
}

export default FormBillVehilce
