


import { Col, Form, Input, Row, message } from 'antd';
import { H5Styled, H8Styled } from '../../../styled/HomeStyledComponent/listStyled';
import CameraComponent from '../../cameraComponent/cameraComponent';
import styled from 'styled-components';
import { useAtom } from 'jotai';
import { capturedImagee, licenseMoto } from '../../../atom/store';
import { useEffect, useRef, useState } from 'react';
import Cookies from 'js-cookie';
import moment from 'moment';
import { BASE_URL } from '../../../../api/requet';
import Webcam from 'react-webcam';
import axios from 'axios';
import { StyledButtonPressedEffect } from '../../../styled/styledListOfDevice/styledComponent';

const StyledCol = styled(Col)`
  border: 3px solid #000;
  padding: 0px;
`;
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

const SendMotoComponent = () => {
  const [capturedImage, setCapturedImage] = useState('');
  const [IDCard, setIDCard] = useState('');
  const [cost, setCost] = useState('');
  const [parkingName, setParkingName] = useState('');
  const [entryTime, setEntryTime] = useState();
  const webcamRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  const [cameraActive, setCameraActive] = useState(true);
  const cloudinaryCloudName = 'deae9vxvg';
  const cloudinaryUploadPreset = 'qqvsrckx';
  const [image, setUrlImage] = useState('');
  const inputRef = useRef(null);
  const [form] = Form.useForm();
  const [lisenseVehicle, setLisenseVehicle] = useState('');
  const [username, setUserName] = useState('');
  const [vehicleyType, setVehicleyType] = useState('Motor');

  useEffect(() => {
    const initialValues = String(Cookies.get('parkingName'));
    setParkingName(initialValues);
    const parsedUserName = String(Cookies.get('userName'));
    setUserName(parsedUserName);
    inputRef.current.focus()
  }, []);
  
   useEffect(() => {
  //   const handleKeyDown = (event) => {
  //     // if (event.key === 'Tab') {
  //     //   event.preventDefault();
  //     //   const button = document.querySelector('button[type="submit"]');
  //     //   button.click();
  //     // }
  //   };
  
    document.addEventListener('keydown', handleKeyDown);
  
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);
  
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      capturePhoto();
    } else  if (event.key === 'Tab') {
             event.preventDefault();
             const button = document.querySelector('button[type="submit"]');
             button.click();
           }
  
    
  };

  const capturePhoto = async () => {
    setEntryTime(moment().format('HH:mm:ss  YYYY-MM-DD '))
    const imageSrc = webcamRef.current.getScreenshot();
    setCapturedImage(imageSrc);
    const formData = new FormData();
    formData.append('file', imageSrc);
    formData.append('upload_preset', cloudinaryUploadPreset);
    try {
      const response = await axios.post(
        `https://api.cloudinary.com/v1_1/${cloudinaryCloudName}/image/upload`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }
      );
      setUrlImage(response.data.secure_url);
      const recognitionUrl = 'http://localhost:80/api/recognition';
      // const requestBody = 'https://res.cloudinary.com/deae9vxvg/image/upload/v1688226172/kow7pug8o1s7dz8dxn6t.jpg'; // Adjust the data value as required
      const requestBody = response.data.secure_url;
      const recognitionResponse = await axios.post(recognitionUrl, requestBody);
      setLisenseVehicle(recognitionResponse.data.data[0].textPlate);
      console.log(recognitionResponse.data.data[0].textPlate); 
      console.log('Image uploaded successfully:', response.data.secure_url);
      // Save the URL of the image to the database or handle the response as needed
    } catch (error) {
      console.error('Error uploading image:', error);
    }
    setTimeout(() => {
      setCapturedImage('');
    }, 3000);
    console.log('Image URL:', image);
    setIsLoading(true);
    // try {
    //   const recognitionUrl = 'http://localhost:80/api/recognition';
    //   // const requestBody = 'https://res.cloudinary.com/deae9vxvg/image/upload/v1688226172/kow7pug8o1s7dz8dxn6t.jpg'; // Adjust the data value as required
    //   const requestBody = image;
    //   const recognitionResponse = await axios.post(recognitionUrl, requestBody);
    //   setLisenseVehicle(recognitionResponse.data.data[0].textPlate);
    //   console.log(recognitionResponse.data.data[0].textPlate); // Handle the data returned from the API
    // } catch (error) {
    //   console.error(error); // Handle the error if the API call fails
    // }
    inputRef.current.focus()
  };
  const onFinishFailed = () => {};
  const onFinish = async (values) => {
    values.id_card=IDCard,
    values.image=image,
    values.license_vehicle= lisenseVehicle,
    values.type= vehicleyType,
    values.parking_name = parkingName,
    console.log("nam", username)
    try {
      console.log('Request data:', values);
      setIsLoading(true);
      axios
      .post(`${BASE_URL}/save-vehicle1`, values)
        .then(() => {
          setIsLoading(false);
          message.info('Thêm thành công');
      setIDCard('')
      setLisenseVehicle('')
      setEntryTime('')

        })
        .catch((error) => {
          setIsLoading(false);
          message.error(error.response.data.message);
      setIDCard('')
      setLisenseVehicle('')
      setEntryTime('')

        });

    } catch (error) {
      console.error(error);
      setIDCard('')

    }
  };

  return (
    <>
      <Row justify="center">
        <Col span={23}>
          <H8Styled style={{ margin: '10px 0px 5px 0px', textAlign: 'center' }}>
          Management Parking
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
                {capturedImage && (
                  <img
                    src={capturedImage}
                    alt="Ảnh chụp"
                    style={{ maxWidth: '100%', maxHeight: '100%' }}
                  />
                )}
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
              
              name="id_card"
              style={{ paddingTop: '20px', marginBottom: '7px' }}
            ><h2 style={{ display: 'flex', alignItems: 'center' }}>
            ID: 
            <Input ref={inputRef} value={IDCard} onChange={(e) => setIDCard(e.target.value)} />
          </h2>
          
            </Form.Item>
            </Row>
            <Row>
            <Row>
            <Form.Item name="parking_name" style={{ marginBottom: '7px' }}>
              <h2>Parking Name : {parkingName}</h2>
            </Form.Item>
            </Row>
            {/* <Form.Item
              name="parkingCode"
            >
              <h2>ParkingCode: {parkingCode} </h2>
            </Form.Item> */}
            </Row>
            <Row>
          <Form.Item name="type" >
              <h2>Type: {vehicleyType}</h2>
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
            <Form.Item name="license_vehicle" style={{ marginBottom: '7px' }}>
              <h2>License_vehicle: {lisenseVehicle}</h2>
            </Form.Item>
            </Row>
            {/* <Row>
            <Form.Item
              name="username"
            >
              <h2>Tài khoản gửi: {username}</h2>
            </Form.Item>
           
          </Row> */}
          <Row>
            {/* <Form.Item name="image" style={{ marginBottom: '7px' }}>
              <h2>Url ảnh: {image}</h2>
            </Form.Item> */}
  
        </Row>
        </Col>
        
        <Form.Item style={{ textAlign: 'center' }}>
          <StyledButtonPressedEffect type="primary" htmlType="submit">
            Add to Parking
          </StyledButtonPressedEffect>
        </Form.Item>
      </Row>
      </Form>
      </Col>
    </>
  );
};

export default SendMotoComponent;

