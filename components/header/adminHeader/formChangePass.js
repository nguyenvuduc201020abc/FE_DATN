import { Form, Input, Spin, message } from 'antd'
import { memo, useState } from 'react'
import { StyledButtonPressedEffect } from '../../styled/styledListOfDevice/styledComponent'
import { apiChangePassword } from '../../../api/accountAPI'
import Cookies from 'js-cookie'
import { BASE_URL } from '../../../api/requet'
import axios from 'axios'
import { Router } from 'next/router'
import { UrlPath } from '../../../type/urlPath'

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
const FormChangePass = () => {
  const [isLoading, setLoading] = useState(false)
  const [oldPasswordTemp, setOldPasswordTemp] = useState('')
  const [username, setUserName] = useState('')

  const [newPasswordTemp, setNewPasswordTemp] = useState('')
  const onFinish = (values) => {
    setLoading(true)
    values.username = Cookies.get('username')
    console.log('user', values)
    console.log(`${BASE_URL}/change_password?username=${Cookies.get('username')}&oldpassword=${oldPasswordTemp}&newpassword=${newPasswordTemp}`);
    axios
    .put(
      `${BASE_URL}/change_password?username=${Cookies.get('username')}&oldpassword=${oldPasswordTemp}&newpassword=${newPasswordTemp}`
    )
    // apiChangePassword(values)

      .then(() => {
        message.info('Change password success!')
        setLoading(false)
        Cookies.remove('role')
        Cookies.remove('username')
        Cookies.remove('jwt_token')
        // Router.push(`http://localhost:3000/auth`)
        // Router.push(UrlPath.auth.url)
      })
      .catch((error) => {
        console.log(error)
        setLoading(false)
        message.error('Change password failed')
      })
  }
  const onFinishFailed = (errorInfo) => {}
  return (
    <>
      <Spin size="large" spinning={isLoading}>
        <Form
          name="basic"
          layout="vertical"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="on"
          validateMessages={validateMessages}
        >
          <Form.Item
            name="oldPassword"
            rules={[
              {
                message: 'Please enter old password!'
              }
              //  {
              //    pattern: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^\w\d\s]).{8,}$/,
              //    message:
              //      'Mật khẩu phải trên 8 ký tự và phải gồm có 1 ký tự viết hoa, 1 ký tự viết thường, 1 ký tự đặc biệt và 1 số, ví dụ: Mobifone1@ '
              //  }
            ]}
          >
            <Input
              placeholder="Old password"
              value={oldPasswordTemp}
              onChange={(e) => setOldPasswordTemp(e.target.value)}
            />
          </Form.Item>

          <Form.Item
            name="newPassword"
            rules={[
              {
                message: 'Please enter new password!'
              },
              {
                pattern: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^\w\d\s]).{8,}$/,
                message:
                  'Password must be over 8 characters and must include 1 uppercase character, 1 lowercase character, 1 special character and 1 number, for example: Mobifone1@ '
              }
            ]}
          >
            <Input.Password
              placeholder="New password"
              value={newPasswordTemp}
              onChange={(e) => setNewPasswordTemp(e.target.value)}
            />
          </Form.Item>
          <Form.Item style={{ textAlign: 'center' }}>
            <StyledButtonPressedEffect
              type="primary"
              htmlType="submit"
              // onClick={handleChange}
            >
              Change password
            </StyledButtonPressedEffect>
          </Form.Item>
        </Form>
      </Spin>
    </>
  )
}
export default memo(FormChangePass)
// import { Form, Input, Spin, message } from 'antd'
// import { memo, useState } from 'react'
// import { StyledButtonPressedEffect } from '../../styled/styledListOfDevice/styledComponent'
// import { apiChangePassword } from '../../../api/accountAPI'
// import Cookies from 'js-cookie'

// const validateMessages = {
//   required: '${label} is required!',
//   types: {
//     email: '${label} is not a valid email!',
//     number: '${label} is not a valid number!'
//   },
//   number: {
//     range: '${label} must be between ${min} and ${max}'
//   }
// }
// const FormChangePass = () => {
//   const [isLoading, setLoading] = useState(false)
//   const [oldPasswordTemp, setOldPasswordTemp] = useState('')
//   const [username, setUserName] = useState('')

//   const [newPasswordTemp, setNewPasswordTemp] = useState('')
//   const onFinish = (values) => {
//     setLoading(true)
//     values.username = Cookies.get('username')
//     console.log('user', values)
//     apiChangePassword(values)
//       .then(() => {
//         message.info('Đổi mật khẩu thành công')
//         setLoading(false)
//         Cookies.remove('role')
//         Cookies.remove('userName')
//         Cookies.remove('jwt_token')
//         router.push(UrlPath.auth.url)
//       })
//       .catch((error) => {
//         setLoading(false)
//         message.error('Đổi mật khẩu không thành công')
//       })
//   }
//   const onFinishFailed = (errorInfo) => {}
//   return (
//     <>
//       <Spin size="large" spinning={isLoading}>
//         <Form
//           name="basic"
//           layout="vertical"
//           onFinish={onFinish}
//           onFinishFailed={onFinishFailed}
//           autoComplete="on"
//           validateMessages={validateMessages}
//         >
//           <Form.Item
//             name="oldPassword"
//             rules={[
//               {
//                 message: 'Xin Hãy Nhâp Mật Khẩu Cũ!'
//               }
//               //  {
//               //    pattern: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^\w\d\s]).{8,}$/,
//               //    message:
//               //      'Mật khẩu phải trên 8 ký tự và phải gồm có 1 ký tự viết hoa, 1 ký tự viết thường, 1 ký tự đặc biệt và 1 số, ví dụ: Mobifone1@ '
//               //  }
//             ]}
//           >
//             <Input
//               placeholder="Mật Khẩu Cũ"
//               value={oldPasswordTemp}
//               onChange={(e) => setOldPasswordTemp(e.target.value)}
//             />
//           </Form.Item>

//           <Form.Item
//             name="newPassword"
//             rules={[
//               {
//                 message: 'Xin Hãy Nhâp Mật Khẩu Mới!'
//               },
//               {
//                 pattern: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^\w\d\s]).{8,}$/,
//                 message:
//                   'Mật khẩu phải trên 8 ký tự và phải gồm có 1 ký tự viết hoa, 1 ký tự viết thường, 1 ký tự đặc biệt và 1 số, ví dụ: Mobifone1@ '
//               }
//             ]}
//           >
//             <Input.Password
//               placeholder="Mật Khẩu Mới"
//               value={newPasswordTemp}
//               onChange={(e) => setNewPasswordTemp(e.target.value)}
//             />
//           </Form.Item>
//           <Form.Item style={{ textAlign: 'center' }}>
//             <StyledButtonPressedEffect
//               type="primary"
//               htmlType="submit"
//               // onClick={handleChange}
//             >
//               Thay Đổi
//             </StyledButtonPressedEffect>
//           </Form.Item>
//         </Form>
//       </Spin>
//     </>
//   )
// }
// export default memo(FormChangePass)