import { Col, Form, Input, Row, message } from 'antd'
import {
  H5Styled,
  H8Styled
} from '../../../styled/HomeStyledComponent/listStyled'
import CameraComponent from '../../cameraComponent/cameraComponent'
import styled from 'styled-components'
import { useAtom } from 'jotai'
import { capturedImagee, licenseMoto } from '../../../atom/store'
import { useEffect, useRef, useState } from 'react'
import Cookies from 'js-cookie'
import moment from 'moment'
import { BASE_URL } from '../../../../api/requet'
import Webcam from 'react-webcam';
import axios from 'axios';
import { StyledButtonPressedEffect } from '../../../styled/styledListOfDevice/styledComponent'
import { SoundTwoTone } from '@ant-design/icons'
const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!'
  },
  number: {
    range: '${label} must be between ${min} and ${max}'
  }
};
const StyledRow = styled(Row)`
  border: 1px solid #000;
  padding: 20px;
`
const StyledCol = styled(Col)`
  border: 3px solid #000;
  padding: 0px;
`
const OutMotoComponent = () => {
  const [capturedImage, setCapturedImage] = useAtom(capturedImagee)
  const [type, setType] = useState('')
  const [IDCard, setIDCard] = useState()
  const [parkingName, setParkingName] = useState()
  const [entryTime, setEntryTime] = useState()
  const [username, setUserName] = useState('')
  const [lisenseVehicle, setlisenseVehicle]=useAtom(licenseMoto)
  const inputRef = useRef(null);
  const webcamRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false)
  const [cameraActive, setCameraActive] = useState(true);
  const [outTime, setOutTime] = useState('')
  const [vehicleyType, setvehicleyType] = useState()
  const [cost, setCost] = useState()
  const [form] = Form.useForm();
  const [image, setImage] = useState()


  useEffect(() => {
    const initialValues = String(Cookies.get('parkingName'));
    setParkingName(initialValues)
    // const parsedUserName = String(Cookies.get('userName'))
    // setUserName(parsedUserName)
    setOutTime(moment().format('HH:mm:ss  YYYY-MM-DD '))
    inputRef.current.focus()
  }, [])

  const onFinishFailed = () => {};
  useEffect(() => {
    
      document.addEventListener('keydown', handleKeyDown);
    
      return () => {
        document.removeEventListener('keydown', handleKeyDown);
      };
    });
    
   const handleKeyDown = (event) => {
  if (event.key === 'Tab') {
    event.preventDefault();
    const button = document.querySelector('button[type="submit"]');
    button.click();
  } else if (event.key === 'Enter') {
    event.preventDefault();
    fetchData(IDCard);
  }
};

       
    // const onFinish = async () => {
    //   // values.id_card= IDCard,
    //   // values.username= username,
    //   // values.lisenseVehicle= lisenseVehicle,
    //   // values.entryTime= entryTime,
    //   // values.outTime = outTime, 
    //   // values.vehicleyType= vehicleyType,
    //   // values.parkingCode= parkingCode
    //   // setIsLoading(true)
    //   axios
    //     .post(
    //       `${BASE_URL}save-bill?id_card=${IDCard}`
    //     )
    //     .then((response) => {
    //       console.log("aaaa")
    //       // const deletedCost = response.data.cost
    //       // setCost(deletedCost)
    //       // Gán giá trị cost vào values trước khi gọi API post
         
    //         .then(() => {
    //           setIsLoading(false)
    //           message.info('Cho xe ra thành công')
    //         })
    //         .catch((error) => {
    //           setIsLoading(false)
    //           message.error(error.response.data.message)
    //         })
    //     })
    //     // .catch((error) => {
    //     //   setIsLoading(false)
    //     //    message.error(error.response.data.message);
    //     // })
    // }
    const onFinish = async () => {
      console.log(`${BASE_URL}/save-bill?id_card=${IDCard}`)
      const headers = {
        Authorization:'Bearer '+Cookies.get('jwt_token'),
      };
      
      await axios
        .post(
          `${BASE_URL}/save-bill?id_card=${IDCard}`,{headers}
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
    };
    // const onFinish = async () => {
    //   console.log(`${BASE_URL}/export-bill?id_card=${IDCard} `);
    //   const headers = {
    //   Authorization: 'Bearer ' + Cookies.get('jwt_token'),
    //   // Thêm các header khác nếu cần
    //   };
    //   console.log(headers);
    //   try {
    //   const response = await axios.post(`${BASE_URL}/export-bill?id_card=${IDCard} `,{headers});
    //   console.log(response.data);
    //   message.info('Thêm thành công');
    //   console.log("aaaabbbb");
    //   } catch (error) {
    //   console.error(error);
    //   message.info('Thêm thất bại');
    //   // Xử lý lỗi ở đây
    //   }
    //   };
      
    const fetchData = async (IDCard) => {

      console.log(IDCard)
      try {
        // console.log(month_ticket);
        const headers = {
          Authorization:'Bearer '+Cookies.get('jwt_token'),
          // Thêm các header khác nếu cần
        };
        const response = await axios.get(
          `${BASE_URL}/export-bill?id_card=${IDCard} `,{headers}
        )
        console.log(response.data);
        setImage(response.data.image)
        setvehicleyType(response.data.type)
        // var entry_time1 = response.data.entry_time;
        // var entry_time2 = entry_time1.format('HH:mm:ss  YYYY-MM-DD ')
        var entry_time1 = response.data.entry_time;
        var entry_time2 = moment(entry_time1).format('HH:mm:ss YYYY-MM-DD');
        setlisenseVehicle(response.data.license_vehicle)
        setEntryTime(entry_time2)
        setCost(response.data.cost)
        console.log(`${BASE_URL}/export-bill?id_card=${IDCard}`,{headers});
        console.log(response.data);
        setCost(response.data.cost)
      } catch (error) {
        // Xử lý lỗi khi gọi API
        console.error(error)
      }
    }
 
  return (
    <>
      <Row justify="center">
        <Col span={23}>
          <H8Styled
            style={{ margin: '20px 0px 20px 0px', textAlign: 'center' }}
          >
            Management Parking{' '}
          </H8Styled>
          <Row gutter={[16, 16]}>
            <StyledCol xs={24} sm={12} lg={12} style={{ marginTop: '5px', textAlign: 'center' }}>
              <Row style={{ marginTop: '20px' }}>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '70%'
                  }}
                >
                  <div style={{ width: '70%', height: '80%' }}>
                    <Webcam
                      audio={false}
                      ref={webcamRef}
                      videoSource="usb" // Specify the webcam connected via USB
                      style={{ width: '100%', height: '100%', transform: 'scaleX(-1)' }}
                    />
                  </div>
                </div>
                {/* <button onClick={capturePhoto}>Chụp ảnh</button> */}
              </Row>
            </StyledCol>
            <StyledCol xs={24} sm={12} lg={12} style={{ marginTop: '5px', textAlign: 'center' }}>
              <Row
                style={{
                  marginTop: '20px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                
                  <img
                    src={image}
                    alt="Ảnh chụp"
                    style={{ maxWidth: '100%', maxHeight: '100%' }}
                  />
                
              </Row>
            </StyledCol>
          </Row>
        </Col>
      </Row>
      <Col span={20} style={{ marginLeft: '120px' }}>
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
        
        <Row justify="center" >
     
          <Col xs={24} sm={12} lg={12}>
          <Row>
            <Form.Item
              
              name="IDCard"
              style={{ paddingTop: '20px', marginBottom: '7px' }}
            ><h2 style={{ display: 'flex', alignItems: 'center' }}>
            IDCard: 
            <Input ref={inputRef} value={IDCard} onChange={(e) => setIDCard(e.target.value)} />
          </h2>
          
            </Form.Item>
            </Row>
            <Row>
            <Row>
            <Form.Item name="parkingName" style={{ marginBottom: '7px' }}>
              <h2>Parking Name : {parkingName}</h2>
            </Form.Item>
            </Row>
            {/* <Form.Item
              name="parkingCode"
            >
              <h2>ParkingCode: {parkingCode} </h2>
            </Form.Item> */}
            </Row>
            {/* <Row>
            <Form.Item
              name="username" style={{ marginBottom: '7px' }}
            >
              <h2>Tài khoản gửi: {username}</h2>
            </Form.Item>   
          </Row> */}
         
            <Row>
            <Form.Item
              name="cost" style={{ marginBottom: '7px' }}
            >
              <h2>Cost: {cost}</h2>
            </Form.Item>   
          </Row>
       
       
        </Col>
        <Col xs={24} sm={12} lg={12}>
        <Row>
            <Form.Item name="entryTime" style={{ paddingTop: '20px', marginBottom: '7px' }}>
              <h2>Entry Time: {entryTime}</h2>
            </Form.Item>
          </Row>
          <Row>
            <Form.Item name="outTime" style={{ marginBottom: '7px' }}>
              <h2>Out Time: {outTime}</h2>
            </Form.Item>
        </Row> 
     
        <Row>
            <Form.Item name="lisenseVehicle" style={{ marginBottom: '7px' }}>
              <h2>License Vehicle: {lisenseVehicle}</h2>
            </Form.Item>
            </Row>
            <Row>
          <Form.Item name="vehicleyType" style={{ marginBottom: '7px' }} >
              <h2>Type: {vehicleyType}</h2>
            </Form.Item>
            </Row>
           
         
        </Col>
        
        <Form.Item style={{ textAlign: 'center' }}>
          <StyledButtonPressedEffect type="primary" htmlType="submit">
            Out Parking 
          </StyledButtonPressedEffect>
        </Form.Item>
      </Row>
      </Form>
      </Col>
    </>
  )
}

export default OutMotoComponent
