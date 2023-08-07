import { Row } from 'antd'
import styled from 'styled-components'

export const RowAntStyled = styled(Row)`
  width: 100%;
  height: ${(
    props) => props.$height};
  border-top: 1px solid hsla(0, 0%, 100%, 0.08);
`
export const H5Styled = styled.h5`
  color: #101010;
  text-transform: uppercase;
  font-size: 14px;
`
export const H6Styled = styled.h5`
  color: #101010;
  text-transform: uppercase;
  font-size: 14px;
`

export const H8Styled = styled.h5`
  color: #101010;
  text-transform: uppercase;
  font-size: 25px;
  font-weight: 650;
`
export const SpanStyled = styled.span`
  font-size:20px ;
  font-weight: 600;
  color: #32325d;
`
export const PStyled = styled.p`
  font-size: 16px;
  font-weight: 300;
  margin-left: 16px;
`
export const BorderBillStyled= styled.div`
 border: 2px solid #00BFFF;
  padding :10px;
  border-radius: 10px 
`