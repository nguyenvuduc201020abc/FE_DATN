import { NextResponse } from 'next/server'
import { UrlPath } from './type/urlPath'

export function middleware(req) {
  const { origin } = req.nextUrl
  const cookies = req.cookies.get('jwt_token')
  const role = req.cookies.get('role')
  if (!cookies) {
    return NextResponse.rewrite(`${origin}${UrlPath.auth.url}`)
  }

  // if (
  //   role.value === '2' &&
  //   ['/account', '/device', '/updateOta'].includes(req.nextUrl.pathname)
  // ) {
  //   return NextResponse.rewrite(`${origin}${UrlPath.home.url}`)
  // }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/',
  ]
}
