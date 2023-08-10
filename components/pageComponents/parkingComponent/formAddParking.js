import { Col, Form, Input, Row, Spin, message } from "antd"
import { memo, useState } from "react"
import { StyledButtonPressedEffect } from "../../styled/styledListOfDevice/styledComponent"
import axios from "axios"
import { BASE_URL } from "../../../api/requet"
import { SoundTwoTone } from "@ant-design/icons"
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

const FormAddParking = ( ) => {
    const [longtitude, setLongtitude] = useState('')
    const [cmTicket, setCmTicket] = useState('')
    const [mmTicket, setMmTicket] = useState('')
    const [latitude, setLatitude] = useState('')
    const [parkingAddress, setPakingAddress] = useState('')
    const [parkingName, setParkingName] = useState('')
    const [mmPrice, setMmPrice] = useState('')
    const [mnPrice, setMnPrice] = useState('')
    const [cmPrice, setCmPrice] = useState('')
    const [cnPrice, setCnPrice] = useState('')
    const [CapacityMotor, setCapacityMotor] = useState('')
    const [CapacityCar, setCapacityCar] = useState('')

    


    const [isLoading, setLoading]= useState(false)
    const onFinish = (values) => {
      console.log(values);
      console.log(values.parking_name);
      setLoading(true)
      axios
        .post(`${BASE_URL}/add-parking`, values)
        .then(() => {
          setLoading(false)
          message.info('Thêm thành công')
        })
        .catch((error) => {
          setLoading(false)
          message.error(error.response.data.message)
        })
    }
    const onFinishFailed = (errorInfo) => {
    }
    return(
        <>
        
        <Spin size="Large" spinning={isLoading}>
            <Form  
             name="basic"
             initialValues={{
            remember: true
          }}
          layout="vertical"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          validateMessages={validateMessages}
          >
           <h2 style={{ fontSize: '20px', textAlign: 'center' }}>Add Parking</h2>
{/* 
            <Form.Item
            label="ParkingCode"
            name="ParkingCode"
            style={{ paddingBottom: '1px' }}

            rules={[{required: true, message: 'Hãy nhập ParkingCode!',},]}

            >
                <Input
              value={pakingCode}
              onBlur={(e) => setParkingCode(e.target.value)}
            />
            </Form.Item> */}

            <Row gutter={[16, 48]}>
              <Col span={"12"}>
              <Form.Item
            label="Parking_name"
            name="parking_name"
            style={{ paddingBottom: '1px' }}

            rules={[{required: true, message: 'Enter parking name!',},]}

            >
                <Input
              value={parkingName}
              onBlur={(e) => setParkingName(e.target.value)}
            />
            </Form.Item>
            </Col>
            <Col>
            <Form.Item
            label="Address"
            name="parking_address"
            style={{ paddingBottom: '1px' }}

            rules={[{required: true, message: 'Enter address!',},]}

            >
                <Input
              value={parkingAddress}
              onBlur={(e) => setPakingAddress(e.target.value)}
            />
            </Form.Item>
            </Col>
            </Row>

            <Row gutter={[16, 48]}>
              <Col span={"12"}>
              <Form.Item
            label="Capacity motor"
            name="capacity_motor"
            style={{ paddingBottom: '1px' }}
            rules={[{required: true, message: 'Enter capacity!',},]}
            >
                <Input
              value={CapacityMotor}
              onBlur={(e) => setCapacityMotor(e.target.value)}
            />
            </Form.Item>
</Col>
<Col>
            <Form.Item
            label="Capacity car"
            name="capacity_car"
            style={{ paddingBottom: '1px' }}
            rules={[{required: true, message: 'Enter capacity!',},]}
            >
                <Input
              value={CapacityCar}
              onBlur={(e) => setCapacityCar(e.target.value)}
            />
            </Form.Item>
            </Col>
            </Row>
            <Row gutter={[16, 48]}>
              <Col span={"12"}>
            <Form.Item
            label="Price car morning"
            name="cm_price"
            style={{ paddingBottom: '1px' }}

            rules={[{required: true, message: 'Enter price!',},]}

            >
                <Input
              value={cmPrice}
              onBlur={(e) => setCmPrice(e.target.value)}
            />
            </Form.Item>
            </Col>
            <Col span={"12"}>
            <Form.Item
            label="Price car night"
            name="cn_price"
            style={{ paddingBottom: '1px' }}

            rules={[{required: true, message: 'Enter price!',},]}

            >
                <Input
              value={cnPrice}
              onBlur={(e) => setCnPrice(e.target.value)}
            />
            </Form.Item>
            </Col>
            </Row>

            <Row gutter={[16, 48]}>
              <Col span={"12"}>
            <Form.Item
            label="Price motor morning"
            name="mm_price"
            style={{ paddingBottom: '1px' }}

            rules={[{required: true, message: 'Enter price!',},]}

            >
                <Input
              value={mmPrice}
              onBlur={(e) => setMmPrice(e.target.value)}
            />
            </Form.Item>
            </Col>
            <Col span={"12"}>
            <Form.Item
            label="Price motor night"
            name="mn_price"
            style={{ paddingBottom: '1px' }}

            rules={[{required: true, message: 'Enter price!',},]}
            >
                <Input
              value={mnPrice}
              onBlur={(e) => setMnPrice(e.target.value)}
            />
            </Form.Item>
            </Col>
            </Row>  
            <Row gutter={[16, 48]}>
              <Col span={"12"}>
            <Form.Item
            label="Longtitude"
            name="longitude"
            style={{ paddingBottom: '1px' }}

            rules={[{required: true, message: 'Enter longtitude!',},]}

            >
                <Input
              value={longtitude}
              onBlur={(e) => setLongtitude(e.target.value)}
            />
            </Form.Item>
            </Col>
            <Col span={"12"}>
            <Form.Item
            label="Latitude"
            name="latitude"
            style={{ paddingBottom: '1px' }}

            rules={[{required: true, message: 'Enter latitude!',},]}

            >
                <Input
              value={latitude}
              onBlur={(e) => setLatitude(e.target.value)}
            />
            </Form.Item>
            </Col>
            </Row>

            <Row gutter={[16, 48]}>
              <Col span={"12"}>
            <Form.Item
            label="Price car month ticker"
            name="car_month"
            style={{ paddingBottom: '1px' }}

            rules={[{required: true, message: 'Enter price!',},]}

            >
                <Input
              value={cmTicket}
              onBlur={(e) => setCmTicket(e.target.value)}
            />
            </Form.Item>
            </Col>
            <Col span={"12"}>
            <Form.Item
            label="Price motor month ticker"
            name="motor_month"
            style={{ paddingBottom: '1px' }}

            rules={[{required: true, message: 'Enter price!',},]}

            >
                <Input
              value={mmTicket}
              onBlur={(e) => setMmTicket(e.target.value)}
            />
            </Form.Item>
            </Col>
            </Row>

            

            
            <Form.Item style={{ textAlign: 'center' }}>
            <StyledButtonPressedEffect type="primary" htmlType="submit">
              Thêm
            </StyledButtonPressedEffect>
          </Form.Item>
          </Form>
        </Spin>
        </>
    )
}
export default memo(FormAddParking)