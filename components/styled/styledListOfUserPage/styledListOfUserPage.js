import { Row } from 'antd'
import styled from 'styled-components'

export const DivStyledHeaderContent = styled.div`
  background-color: #c4dfaa;
  width: 70%;
  border-radius: 6px;
  height: 36px;
  line-height: 36px;
  font-size: 12px;
  font-weight: 600;
  position: absolute;
  top: -14px;
  left: 15%;
`
export const DivStyledContent = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: #fff;
  /* position: absolute; */
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  /* margin-top: 20px; */
`
export const DivStyledInfo = styled(Row)`
  border-radius: 3px;
  font-size: 16px;
  font-weight: 400;
  width: fit-content;
`
