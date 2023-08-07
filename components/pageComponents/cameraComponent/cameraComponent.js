import { atom, useAtom } from 'jotai';
import React, { useRef, useState } from 'react';
import Webcam from 'react-webcam';
import axios from 'axios';
import { capturedImagee, licenseMoto } from '../../atom/store';
import { message } from 'antd';

const CameraComponent = () => {
  const webcamRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false)
  const [capturedImage, setCapturedImage] = useAtom(capturedImagee);
  const [cameraActive, setCameraActive] = useState(true);
  const [url, setUrl] = useState('')
  const [lisense, setLisense]=useAtom(licenseMoto)
  const cloudinaryCloudName = 'dmjzk4esn';
  const cloudinaryUploadPreset = 'ImageMoto';
//  const cloudinaryApiKey = '129629451734981';
//   const cloudinaryApiSecret = 'rfi8Hh0CX3mkFtDjquGOBMXQorg';
  const capturePhoto = async( ) => {
    const imageSrc = webcamRef.current.getScreenshot();
    setCapturedImage(imageSrc);
    uploadImageToCloudinary(imageSrc);
    setTimeout(() => {
      setCapturedImage(null);
    }, 50000);
    console.log("im", url)
    setIsLoading(true)
    try {
      const urla = 'http://localhost:80/api/recognition';
      const requestBody = 'https://res.cloudinary.com/deae9vxvg/image/upload/v1687963412/b67mtgekdjqjlbsjjb74.jpg'; // Thay đổi giá trị dữ liệu tùy theo yêu cầu
  
      const response = await axios.post(urla, requestBody);
      setLisense(response.data.license_plate);
      console.log(response.data); // Xử lý dữ liệu trả về từ API
      // Thực hiện các hành động khác sau khi gọi API thành công
    } catch (error) {
      console.error(error); // Xử lý lỗi trong trường hợp gọi API không thành công
    }
  
  };

  const uploadImageToCloudinary = async (imageData) => {
    const formData = new FormData();
    formData.append('file', imageData);
    formData.append('upload_preset', cloudinaryUploadPreset);
    try {
      const response = await axios.post(
        `https://api.cloudinary.com/v1_1/${cloudinaryCloudName}/image/upload`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
          // auth: {
          //   username: cloudinaryApiKey,
          //   password: cloudinaryApiSecret,
          // },
        }
      );
      setUrl(response.data.secure_url)
      console.log('Image uploaded successfully:', response.data.secure_url);
      // Lưu URL của ảnh vào cơ sở dữ liệu hoặc xử lý phản hồi khác tùy ý
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
        }}
      >
        {cameraActive && (
          <div style={{ width: '90%', height: '90%' }}>
            <Webcam
              audio={false}
              ref={webcamRef}
              videoSource="usb" // Chỉ định sử dụng webcam cắm qua cổng USB
              style={{ width: '100%', height: '100%', transform: 'scaleX(-1)' }}
            />
          </div>
        )}
      </div>
      {cameraActive && <button onClick={capturePhoto}>Chụp ảnh</button>}
    </>
  );
};

export default CameraComponent;
