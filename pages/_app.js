import 'antd/dist/reset.css'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useState } from 'react'
import AdminLayout from '../components/layout/adminLayout'
import AuthLayout from '../components/layout/authLayout.js'
import '../styles/globals.css'
import { UrlPath } from '../type/urlPath'

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  const [isRoleVip, setIsRoleVip] = useState()
  const [role, setRole] = useState(0)
  const isHaveLayout = router.pathname === UrlPath.auth.url
  const getTitle = () => {
    switch (router.pathname) {
      case UrlPath.home.url: {
        return UrlPath.home.title
      }
      case UrlPath.auth.url: {
        return UrlPath.auth.title
      }
   
  }
}

  return (
    <>
     <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0,maximum-scale=1.0"
        />
        <title>{getTitle()}</title>
      </Head>
      {isHaveLayout ? (
        <AuthLayout>
          <Component {...pageProps} />
        </AuthLayout>
      ) : (
        <AdminLayout>
          <Component {...pageProps} />
        </AdminLayout>
      )}
    </>
  )
}

export default MyApp
