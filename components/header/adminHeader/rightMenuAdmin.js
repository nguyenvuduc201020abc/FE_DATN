import React from 'react'
import AccountIcon from '../../icons/accountIcon'
import { memo, useState, useRef, useEffect } from 'react'
import { useRouter } from 'next/router'
import { DivStyled } from './styled/styled'
import { UrlPath } from '../../../type/urlPath'
import Cookies from 'js-cookie'
import { StyledButtonAntd } from '../../styled/styledListOfDevice/styledComponent'

import ModalAdminHeader from './ModalAdminHeader'

const RightMenuAdmin = (props) => {
  const [userName, setUserName] = useState('')
  const router = useRouter()
  const myRefAccountIcon = useRef()
  const myRefPopup = useRef()
  const [isClickAccountIcon, setIsClickAccountIcon] = useState(false)
  useEffect(() => {
    setUserName(Cookies.get('userName'))
  })
  const { FormChangePassRef } = props
  const handleClickLogOut = (e) => {
    e.preventDefault()
    Cookies.remove('userName')
    Cookies.remove('jwt_token')
    Cookies.remove('role')
    Cookies.remove('parkingCode')
    router.push(UrlPath.auth.url)
  }

  const handleClickAccountIcon = (e) => {
    e.preventDefault()
    setIsClickAccountIcon(!isClickAccountIcon)
  }

  return (
    <>
      <DivStyled width={'200px'} mgTop={'10px'} mgLeft={'-120px'}>
        <div className="cycle-container">
          <div
            className="icon-container"
            onClick={handleClickAccountIcon}
            ref={myRefAccountIcon}
          >
            <AccountIcon
              heigh={'1.8em'}
              width={'1.8em'}
              colorBefore={'#3a416f'}
              colorAfter={'#fff'}
            />
          </div>
          {isClickAccountIcon === true && (
            <div className="popup-container" ref={myRefPopup}>
              <span
                style={{
                  marginLeft: '16px',
                  color: '#812362',
                  fontFamily: 'sans-serif'
                }}
              >
                {Cookies.get("username")}
                <br />
              </span>
              <ModalAdminHeader FormChangePassRef={FormChangePassRef} />
              <StyledButtonAntd
                href={UrlPath.auth.url}
                onClick={handleClickLogOut}
              >
                Log out
              </StyledButtonAntd>
            </div>
          )}
        </div>
      </DivStyled>
    </>
  )
}
export default memo(RightMenuAdmin)
