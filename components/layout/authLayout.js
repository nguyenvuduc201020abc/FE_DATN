import { Layout } from 'antd'
import { Content } from 'antd/lib/layout/layout'
import FooterCus from '../footer/footer'
import AuthHeader from '../header/authHeader/authHeader'

const AuthLayout = ({ children }) => {
  return (
    <>
      <Layout style={{ minHeight: '100vh' }}>
        <AuthHeader />
        <Content style={{ backgroundColor: 'white' }}>{children}</Content>
        
      </Layout>
    </>
  )
}
export default AuthLayout
