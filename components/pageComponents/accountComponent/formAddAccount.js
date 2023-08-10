import { Button, Col, Form, Input, message, Row, Select, Spin } from 'antd'
import axios from 'axios'
import React, { memo, useState } from 'react'
import { BASE_URL } from '../../../api/requet'
import { StyledButtonPressedEffect } from '../../styled/styledListOfDevice/styledComponent'
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

const FormAddAccount = () => {
  const [accountRole, setAccountRole] = useState('')
  const [userName, setUserName] = useState('')
  const [parkingCode, setParkingCode] = useState('')
  const [password, setPassword] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  var cookies = document.cookie.split(';')

  // Tìm và lấy giá trị của "parkingCode" từ cookie
  var rolee
  for (var i = 0; i < cookies.length; i++) {
    var cookie = cookies[i].trim()
    if (cookie.startsWith('role=')) {
      rolee = cookie.substring('role='.length, cookie.length)
      break
    }
  }

  const onFinish = (values) => {
    setIsLoading(true)
    axios
      .post(`${BASE_URL}account`, values)
      .then(() => {
        setIsLoading(false)
        message.info('Thêm thành công')
      })
      .catch((error) => {
        setIsLoading(false)
        message.error(error.response.data.message)
      })
  }
  const onFinishFailed = (errorInfo) => {}
  const SelectRole = (value) => {
    setAccountRole(value)
  }

  return (
    <>
      <Spin size="large" spinning={isLoading}>
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
          <h2 style={{ fontSize: '20px', textAlign: 'center' }}>
            Thêm tài khoản
          </h2>
          <Row gutter={[16,32]}>
            <Col>
          {rolee == 0 && (
            <Form.Item
              label="Role"
              name="role"
              rules={[
                {
                  required: true,
                  message: 'Xin Hãy chọn Quyền!'
                }
              ]}
            >
              <Select
                // defaultValue={2}
                style={{
                  width: 120
                }}
                onChange={SelectRole}
                defaultValue={{
                  value: 1,
                  label: 'Admin'
                }}
              />
            </Form.Item>
          )}
          </Col>
          <Col >
          {rolee == 0 && (
            <Form.Item
              label="Bãi quản lý"
              name="parkingCode"
              rules={[
                {
                  required: true,
                  message: 'Xin Hãy chọn bãi xe!'
                }
              ]}
            >
              <Select
                // defaultValue={2}
                style={{
                  width: 200
                }}
                onChange={SelectRole}
                options={[
                  {
                    value: 1,
                    label: 'Chợ Láng Hạ'
                  },
                  {
                    value: 2,
                    label: '88 Láng Hạ'
                  }, 
                   {
                    value: 3,
                    label: '112 Giải Phóng'
                  }
                ]}
              />
            </Form.Item>
          )}
          </Col>
          </Row>
          
          {rolee == 1 && (
            <Form.Item
              label="Role"
              name="role"
              rules={[
                {
                  required: true,
                  message: 'Xin Hãy chọn Quyền!'
                }
              ]}
            >
              <Select
                // defaultValue={2}
                style={{
                  width: 120
                }}
                onChange={SelectRole}
                defaultValue={{
                  value: 2,
                  label: 'User'
                }}
              />
            </Form.Item>
          )}
          <Form.Item
            label="Tài Khoản"
            name="userName"
            rules={[
              {
                required: true,
                message: 'Please enter username!'
              },
              {
                pattern: /^.{4,}$/,
                message: 'Tài khoản quá ngắn! '
              }
            ]}
          >
            <Input
              value={userName}
              onBlur={(e) => setUserName(e.target.value)}
            />
          </Form.Item>

          <Form.Item
            label="Mật Khẩu"
            name="password"
            rules={[
              {
                required: true,
                message: 'Hãy Nhâp Mật Khẩu !'
              },
              {
                pattern: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^\w\d\s]).{8,}$/,
                message:
                  'Mật khẩu phải trên 8 ký tự và phải gồm có 1 ký tự viết hoa, 1 ký tự viết thường, 1 ký tự đặc biệt và 1 số, ví dụ: Mobifone1@ '
              }
            ]}
          >
            <Input.Password
              value={password}
              onBlur={(e) => setPassword(e.target.value)}
            />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: 'Hãy Nhâp email !'
              }
            ]}
          >
            <Input value={email} onBlur={(e) => setEmail(e.target.value)} />
          </Form.Item>


          <Form.Item
            label="Số Điện Thoại"
            name="phoneNumber"
            rules={[
              {
                required: true,
                message: 'Hãy Nhâp số điện thoại !'
              }
            ]}
          >
            {/* <Input
              value={phoneNumber}
              onBlur={(e) => setPhoneNumber(e.target.value)}
            /> */}
          </Form.Item>

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

export default memo(FormAddAccount)
