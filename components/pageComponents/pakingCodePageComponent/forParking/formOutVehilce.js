import { Col, Form, Input, Row, Spin, message } from 'antd'
import moment from 'moment'
import { useEffect, useState } from 'react'
import { StyledButtonPressedEffect } from '../../../styled/styledListOfDevice/styledComponent'
import { useAtom } from 'jotai'
import {
  modalCostVehicle,
  modalbillVisible,
  vehicleModalData
} from '../../../atom/store'
import axios from 'axios'
import { BASE_URL } from '../../../../api/requet'
import { useRouter } from 'next/router'
import Cookies from 'js-cookie'

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
const FormOutVehilce = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [cost, setCost] = useAtom(modalCostVehicle)
  const [outTime, setOutTime] = useState(
    moment().format('HH:mm:ss  YYYY-MM-DD ')
  )
  const [modalData, setModalData] = useAtom(vehicleModalData)
  const [parkingName, setParkingName] = useState()
  const [lisenseVehicle, setLisenseVehicle] = useState()
  const [username, setUserName] = useState()
  const [entryTime, setEntryTime] = useState()

  const [BillsId, setBillsId] = useState()
  const [imageOut, setImageOut] = useState('')
  const [vehicleyType, setVehicleyType] = useState()
  const [imageIn, setImageIn] = useState()
  const router = useRouter()
  const [modalVisible, setModalVisible] = useAtom(modalbillVisible)

  const [form] = Form.useForm()
  useEffect(() => {
    setImageIn(modalData.image)
    setEntryTime(modalData.entry_time)
    setUserName(modalData.id_card)
    setLisenseVehicle(modalData.license_vehicle)
    setVehicleyType(modalData.type)
    setParkingName(Cookies.get('parkingName'))
    setCost(35000);
  })
  const onFinish = async () => {
    console.log(`${BASE_URL}/save-bill?id_card=${modalData.id_card}`)
    const headers = {
      Authorization:'Bearer '+Cookies.get('jwt_token'),
    };
    
    await axios
      .post(
        `${BASE_URL}/save-bill?id_card=${modalData.id_card}`,{headers}
      )
      .then((response) => {
        console.log(headers)
        message.info('Successfully');
        console.log("aaaabbbb");
      })
      .catch((error) => {
        console.log(headers)
        console.error(error);
        message.info('Failed');
        // Xử lý lỗi ở đây
      });
    // console.log('values', values)
    // console.log('image', imageOut)
    // console.log('valiues', values.username)
    // setIsLoading(true)
    // setTimeout(() => {
    //   setModalVisible(false)
    // }, 3500)
    // axios
    //   .delete(
    //     `${BASE_URL}entryVehicles/lisenseVehicle?LisenseVehicle=${lisenseVehicle}&VehileyType=${vehicleyType}&ParkingCode=${parkingCode}`
    //   )
    //   .then((response) => {
    //     const deletedCost = response.data.cost
    //     // setCost(deletedCost)
    //     // Gán giá trị cost vào values trước khi gọi API post
    //     values.cost = deletedCost
    //     axios
    //       .post(`${BASE_URL}bill`, values)

    //       .then(() => {
    //         setIsLoading(false)
    //         message.info('Out parking successfully!')
    //       })
    //       .catch((error) => {
    //         setIsLoading(false)
    //         message.error(error.response.data.message)
    //       })
    //   })
    //   .catch((error) => {
    //     setIsLoading(false)
    //     // message.error(error.response.data.message);
    //   })
  }

  const onFinishFailed = () => {}
  // useEffect(() => {
  //   if (parkingCode && lisenseVehicle) {
  //     form.setFieldsValue({
  //       parkingCode,
  //       imageOut,
  //       lisenseVehicle,
  //       username,
  //       vehicleyType,
  //       entryTime,
  //       imageIn,
  //       outTime
  //     })
  //   }
  // }, [parkingCode, lisenseVehicle])
  return (
    <Spin size="large" spinning={isLoading}>
      <Form
        name="basic"
        form={form}
        initialValues={{
          remember: true
        }}
        layout="vertical"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        validateMessages={validateMessages}
      >
        <h2 style={{ fontSize: '20px', textAlign: 'center' }}>Out parking</h2>

        <Row gutter={[16, 16]}>
          <Col xs={24} sm={12} lg={12}>
            <Form.Item
              name="parkingName"
              style={{ paddingTop: '20px', marginBottom: '7px' }}
            >
              <p>Parking name: {parkingName} </p>
            </Form.Item>
          </Col>
          <Col xs={24} sm={12} lg={12}>
            <Form.Item
              name="username"
              style={{ paddingTop: '20px', marginBottom: '7px' }}
            >
              <p>Id card: {username}</p>
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={[16, 16]}>
          <Col xs={24} sm={12} lg={12}>
            <Form.Item name="vehicleyType" style={{ marginBottom: '7px' }}>
              <p>Type: {vehicleyType}</p>
            </Form.Item>
          </Col>
          <Col xs={24} sm={12} lg={12}>
            <Form.Item name="entryTime" style={{ marginBottom: '7px' }}>
              <p>Entry time: {entryTime}</p>
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={[16, 16]}>
          <Col xs={24} sm={12} lg={12}>
            <Form.Item name="lisenseVehicle" style={{ marginBottom: '7px' }}>
              <p>License vehicle: {lisenseVehicle}</p>
            </Form.Item>
          </Col>
          <Col xs={24} sm={12} lg={12}>
            <Form.Item name="outTime" style={{ marginBottom: '7px' }}>
              <p> Out time: {outTime}</p>
            </Form.Item>
          </Col>
        </Row>
        {/* <Form.Item label="" name="imageIn" style={{ marginBottom: '7px' }}>
          <p>Hình ảnh xe vào: {imageIn}</p>
        </Form.Item> */}
        {/* <Form.Item
         label="Hình ảnh xe ra"
         name="imageOut"
         style={{ marginBottom:"7px"}}

         >
           <Input
            value={imageOut}
            onBlur={(e) => setImageOut(e.target.value)}
            />
       </Form.Item> */}
        <Form.Item name="cost" style={{ margin: ' 15px 5px' }}>
          <h2>Cost : {cost} VND</h2>
        </Form.Item>
        <Form.Item style={{ textAlign: 'center' }}>
          <StyledButtonPressedEffect type="primary" htmlType="submit">
            Out parking
          </StyledButtonPressedEffect>
        </Form.Item>
      </Form>
    </Spin>
  )
}

export default FormOutVehilce
