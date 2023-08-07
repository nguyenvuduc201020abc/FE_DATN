import { Button } from 'antd'
import styled from 'styled-components'
export const StyledButtonAntd = styled(Button)`
  border: none;
  box-shadow: none;
  background-color: transparent;
  font-weight: 500;
  :focus {
    outline: none;
  }
`
export const StyledH2Hepl = styled.h2`
padding-bottom: 15px;
font-size: 25px;
`
export const StyledBillLisen = styled.p`
text-align: center;
font-size: 20px;`


export const StyledButtonPressedEffect = styled(Button)`
  padding: 6px 38px;
  font-size: 14px;
  text-align: center;
  cursor: pointer;
  outline: none;
  color: #fff;
  background-color: #FFA500;
  border: none;
  border-radius: 6px;
  box-shadow: 0 6px #999;

  :hover {
    background-color: #b5f5ec;
    color: #fff;
  }

  :active {
    background-color: #b5f5ec;
    box-shadow: 0 5px #666;
    transform: translateY(4px);
  }
`

export const StyledDiv = styled.div`
  background-color: #F3F9EF;
  border-radius: 8px;
  box-sizing: border-box;
  @media (min-width: 992px) {
    margin-top: 50px;
    margin-bottom: 50px;

  }
  @media (min-width: 576px) and (max-width: 992px) {
    margin-top: 30px;
  }
  @media (max-width: 576px) {
    margin-top: 20px;

    margin-top: ${(props) => props.top576};
  }
  margin-bottom: ${(props) => props.marginBottom};

  /* box-shadow: 0 0 2rem 0 rgb(136 152 170 / 15%); */
  padding: 20px;
  position: relative; 
  border: 1px solid rgba(0, 0, 0, 0.05);

`
export const StyledChildrenDiv = styled.div`
  width: 86%;
`
export const StyledGrandchildrenDiv = styled.div`
  background: linear-gradient(
    87deg,
    ${(props) => props.des},
    ${(props) => props.sou}
  ) !important;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex; 
  float: right;
  position: absolute; /* Thêm thuộc tính position */
  right: 10px; 
  
`

export const StyledDivChart = styled.div`
  background-color: #fff;
  padding:10px;
  border-radius: 12px;
  height: 330px;
  box-shadow: 0 0 2rem 0 rgb(136 152 170 / 15%);
  position: relative;
  @media (min-width: 576px) and (max-width: 992px) {
    margin-top: 30px;
  }
  left: ${(props) => props.left};
  top: ${(props) => props.top};
  @media (max-width: 576px) {
    margin-top: 35px;}
`
