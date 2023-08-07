
import { Col, Form, Input, Row, Select, Button, message } from "antd"
import Cookies from "js-cookie"
import { useState } from "react"
import { BASE_URL } from '../../../../api/requet'
import { SoundTwoTone } from "@ant-design/icons"




const AccComoponent = () => {
  const [id_card, setIdCard] = useState()
  const [license_vehicle, setLicenseVehicle] = useState()
  const [type, setType] = useState()
  const [user_name, setUsername] = useState()
  const [parking_name, setParking] = useState(Cookies.get('parkingName'))
  const [duration, setDuration] = useState()
  const [cost, setCost] = useState()

  const axios = require('axios');

  const month_ticket = {
    id_card:  id_card,
    license_vehicle: license_vehicle,
    type: type,
    username:user_name,
    parking_name:parking_name,
    duration:duration
  };
  const handlePayment = () => {
    const paymentData = {
      // Include the required data for the payment API
      // Use the values stored in the state variables
    };
    console.log(month_ticket)
    axios.post(`${BASE_URL}/add_month_ticket`, month_ticket)
      .then(response => {
        // Handle the API response
        console.log(response.data);
        message.info('Add successfully');
        // setPaymentStatus(response.data.status);
      })
      .catch(error => {
        // Handle API error
        console.error(error);
      });
    // Perform the payment logic here
    // You can use the values stored in the state variables to process the payment
    console.log("Payment logic goes here");
  };
  // const month_ticket1 = {
  //   type: type,
  //   parking_name:parking_name,
  // };

  
  // axios.post('http://localhost:8080/add_month_ticket', data)
  //   .then(response => {
  //     console.log(response.data);
  //   })
  //   .catch(error => {
  //     console.error(error);
  //   });
  const handleEnterPress = (e) => {
    if (e.key === "Enter") {
      console.log(month_ticket);
      const headers = {
        Authorization:'Bearer '+Cookies.get('jwt_token'),
        // Thêm các header khác nếu cần
      };
      console.log(`${BASE_URL}/check_month_ticket?parking_name=${parking_name}&type=${type}`)
      axios
        .get(
          `${BASE_URL}/check_month_ticket?parking_name=${parking_name}&type=${type}`,{headers}
          )
        .then((response) => {
          console.log(response.data.cost);
          // const { cost } = response.data.cost;
          setCost(response.data.cost);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  return (
    <>
    <Col span={23} style={{marginLeft:'18px'}}>
      <Row justify='center' style={{marginTop:'100px'}}>
        <Col span={3}>
          <Row  justify='center' >
            <h2 >ID Card</h2>
          </Row>
          <Row>
            <Input
              value={id_card}
              onChange={(e) => setIdCard(e.target.value)}
            />
          </Row>

        </Col>
        <Col>
          <Row justify='center'>


            <h2>License Vehicke</h2>
          </Row>
          <Row>
            <Input
              value={license_vehicle}
              onChange={(e) => setLicenseVehicle(e.target.value)}
            />
          </Row>

        </Col>
        <Col>
          <Row justify='center'>
            <h2>Type</h2>
          </Row>
          <Row>
            <Select
              value={type}
              onChange={(value) => setType(value)}
              style={{ width: '150px' }}
            >
              <Select.Option value="motor">  Motor </Select.Option>
              <Select.Option value="car">   Car   </Select.Option>
            </Select>
          </Row>

        </Col>
        <Col>
          <Row justify='center'>


            <h2>Username</h2> 
          </Row>
          <Row>
            <Input
              value={user_name}
              onChange={(e) => setUsername(e.target.value)}
            />
          </Row>

        </Col>
        <Col>
          <Row justify='center'>


            <h2>Parking</h2>
          </Row>
          <Row>
            <Input
              value={parking_name}
              onChange={(e) => setParking(e.target.value)}
              readOnly // Đánh dấu ô nhập liệu là chỉ đọc
            />
          </Row>

        </Col>
        <Col>
          <Row justify='center'>


            <h2>Time</h2>
          </Row>
          <Row>
            <Input
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
            />
          </Row>

        </Col>
        <Col>
        
        <Row justify="center">
              <h2>Cost</h2>
            </Row>
            <Row>
              <Input
                value={cost}
                onChange={(e) => setCost(e.target.value)}
                onKeyDown={handleEnterPress}
              />
            </Row>


        </Col>
        <>
      {/* ...existing code... */}

      <Row justify="end" style={{ marginTop: '20px' }} className="pay-button-row">
        <Button type="primary" onClick={handlePayment}>Complete payment</Button>
      </Row>
    </>
      </Row>
      </Col>
      {/* <Button type="primary" >
        
      </Button> */}
    </>
  )
}
export default AccComoponent
