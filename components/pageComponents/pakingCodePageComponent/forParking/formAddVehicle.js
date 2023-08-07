import { Spin, Form, Input, message, Select } from 'antd'
import { useEffect, useState } from 'react'
import { StyledButtonPressedEffect } from '../../../styled/styledListOfDevice/styledComponent'
import moment from 'moment/moment'
import axios from 'axios'
import { BASE_URL } from '../../../../api/requet'
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
const FormAddVehicle = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [userName, setUserName] = useState()
  const [lisenseVehicle, setLisenseVehicle] = useState()
  const [image, setImage] = useState()

  const [form] = Form.useForm()
  const [parkingCode, setParkingCode] = useState()
  const [entryTime, setEntryTime] = useState(
    moment().format('HH:mm:ss  YYYY-MM-DD ')
  )
  const [vehicleyType, setvehicleyType] = useState('')
  const onFinish = (values) => {
    console.log('va', values)
    setIsLoading(true)
    axios
      .post(`${BASE_URL}entryVehicles`, values)
      .then(() => {
        setIsLoading(false)
        message.info('Thêm thành công')
      })
      .catch((error) => {
        setIsLoading(false)
        message.error(error.response.data.message)
      })
  }
  const onFinishFailed = () => {}
  // Lấy giá trị initialValues từ localStorage/sessionStorage
  useEffect(() => {
    const initialValues = sessionStorage.getItem('parkingCode')
    setParkingCode(initialValues)
  }, [])
  useEffect(() => {
    if (parkingCode) {
      form.setFieldsValue({ parkingCode: parkingCode })
    }
  }, [parkingCode])
  // useEffect(() => {
  //   setEntryTime(moment().format());
  //   form.setFieldsValue({ time: moment().format() });
  //   console.log("bbbbbbbbb", entryTime)
  // }, []);
  const SelectRole = (value) => {
    setvehicleyType(value)
  }
  return (
    <>
      <Spin size="large" spinning={isLoading}>
        <Form
          name="basic"
          form={form}
          initialValues={{ myField: parkingCode, entryTime }}
          layout="vertical"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          validateMessages={validateMessages}
        >
          <h2 style={{ fontSize: '20px', textAlign: 'center' }}>
            Add Vehicle
          </h2>

          <Form.Item
            name="parkingCode"
            style={{ paddingTop: '20px', marginBottom: '10px' }}
          >
            <p>ParkingCode: {parkingCode}</p>
          </Form.Item>
          <Form.Item name="entryTime">
            <p>Thời gian: {entryTime}</p>
          </Form.Item>
          <Form.Item
            label="Chọn loại xe"
            name="vehicleyType"
            defaultValue="xe may"
            rules={[
              {
                required: true,
                message: 'Xin Hãy chọn loại xe!'
              }
            ]}
          >
            <Select style={{ width: 120 }} onChange={SelectRole}>
              <Option value="xe oto">xe oto</Option>
              <Option value="xe may">xe máy</Option>
            </Select>
          </Form.Item>
          <Form.Item
            label="Tên tài khoản"
            name="userName"
            rules={[{ required: true, message: 'Hãy nhập tài khoản!' }]}
          >
            <Input
              value={userName}
              onBlur={(e) => setUserName(e.target.value)}
            />
          </Form.Item>
          <Form.Item
            label="Biển số xe"
            name="lisenseVehicle"
            rules={[{ required: true, message: 'Hãy nhập biển số!' }]}
          >
            <Input
              value={lisenseVehicle}
              onBlur={(e) => setLisenseVehicle(e.target.value)}
            />
          </Form.Item>
          {/* <Form.Item
            label="Hình ảnh"
            name="image"
            rules={[{ required: true, message: 'Hãy nhập hình ảnh!' }]}
          >
            <Input value={image} onBlur={(e) => setImage(e.target.value)} />
          </Form.Item> */}
          <Form.Item style={{ textAlign: 'center' }}>
            <StyledButtonPressedEffect type="primary" htmlType="submit">
              Thêm xe
            </StyledButtonPressedEffect>
          </Form.Item>
        </Form>
      </Spin>
    </>
  )
}

export default FormAddVehicle
