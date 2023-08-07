import { Col, Row } from 'antd'
import {
  StyledDiv,
  StyledDivChart,
  StyledGrandchildrenDiv
} from '../../styled/styledListOfDevice/styledComponent'
import AdminHomeParkingIcon from '../../icons/aminHomeParkingIcon'
import GreenTickIcon from '../../icons/greenTickIcon'
import {
  H5Styled,
  H6Styled,
  SpanStyled
} from '../../styled/HomeStyledComponent/listStyled'
import NewUserIcon from '../../icons/newUserIcon'
import MoneyIcon from '../../icons/moneyIcon'
import { useEffect, useState } from 'react'
import moment from 'moment'
import axios from 'axios'
import { BASE_URL } from '../../../api/requet'
import Cookies from 'js-cookie'
// import { VerticalBarChart } from '../../chart/verticalBarChart'
// import { PieChart } from '../../chart/pieChart'

const Adminhome = () => {
  const [monthRevenue, setMonthRevenue] = useState()
  const [currentMonth, setCurrentMonth] = useState('')
  const [parking_name, setParkingName] = useState('')
  // const [parkingCode,setParkingCode] = useState()
  const [capacity_motor, setCapacityMotor] = useState()
  const [capacity_car, setCapacityCar] = useState()
  const [empty_motor, setEmptyMotor] = useState()
  const [empty_car, setEmptyCar] = useState()
  const [car_ticket, setCarTicket] = useState()
  const [motor_ticket, setMotorTicket] = useState()
  const [totalVehicleTrue, setTotalVehicleTrue] = useState()
  const [totalVehicleFalse, setTotalVehicleFalse] = useState()
  const [totalItemAcc, setTotalItemAcc] = useState()
  const [skip, setSkip] = useState(0)
  const [pageSize, setPageSize] = useState(10)

  //   useEffect(() => {
  //   setParkingCode(parseInt(Cookies.get('parkingCode ')))
  // },[parkingCode]);
  //    console.log("park",parkingCode)
  
  // useEffect(() => {
  //   const monthNumber = parseInt(moment().format('M'))
  //   setCurrentMonth(monthNumber)
  // }, [currentMonth])
  // useEffect(() => {
  //   if (currentMonth !== '') {
  //     const getData = async () => {
  //       const response = await axios.get(
  //         `${BASE_URL}bill/revenue/parkingCode/month?Month=${currentMonth}&ParkingCode=${parseInt(Cookies.get('parkingCode'))}`
  //       )
  //       setMonthRevenue(response.data.revenve)
  //       console.log('re', response.data.revenve)
  //     }
  //     getData()
  //   }
  // }, [currentMonth])

  function replaceSpaceWithSpace(str) {
    var decodedStr = decodeURIComponent(str);
    var replacedStr = decodedStr.replace(/%20/g, ' ');
    return replacedStr;
  }
  // var temp = Cookies.get('parkingName').replace(/%20/g, ' ');
  // console.log(temp);
  // console.log(Cookies.get('parkingName'));
  useEffect(() => {
    
      const gettData = async () => {
        const response = await axios.get(
          `${BASE_URL}/get-info-parking?parking_name=${String(Cookies.get('parkingName'))}`
          
          // `${BASE_URL}/get-info-parking?parking_name=${String(decodeURIComponent(Cookies.replace(/(?:(?:^|.*;\s*)parkingName\s*=\s*([^;]*).*$)|^.*$/, "$1")))}`
        )
        setParkingName(response.data.parking_name)
        setCapacityMotor(response.data.capacity_motor)
        setCapacityCar(response.data.capacity_car)
        setEmptyCar(response.data.empty_car)
        setEmptyMotor(response.data.empty_motor)
        setCarTicket(response.data.car_month)
        setMotorTicket(response.data.motor_month)
        console.log('aaa', response.data.parking_name)
      }
      gettData()  
  }, [])
  // useEffect(() => {
  //   if (currentMonth !== '') {
  //     const getData = async () => {
  //       const response = await axios.get(
  //         `${BASE_URL}entryVehicles/parkingCode/month?ParkingCode=${parseInt(Cookies.get('parkingCode'))}&Month=${currentMonth}`
  //       )
  //       setTotalVehicleFalse(response.data.totalVehiclesFalse)
  //     }
  //     getData()
  //   }
  // }, [currentMonth])

  // useEffect(() => {
  //   const getData = async () => {
  //     const response = await axios.get(
  //       `${BASE_URL}account?Skip=${skip}&PageSize=${pageSize}`
  //     )
  //     setTotalItemAcc(response.data.result.totalItems)
  //   }
  //   getData()
  // }, [skip])
  return (
    <>
      <Col span={23} style={{ marginLeft: '18px' }}>
        <Row gutter={[16, 16]} style={{ marginBottom: '70px' }}>
          <Col xs={24} sm={12} lg={6} style={{ textAlign: 'center' }}>
            <StyledDiv>
              <Row gutter={[24, 16]}>
                <Col xs={18}>
                  <H5Styled>Parking name : </H5Styled>
                  <H5Styled>{parking_name}</H5Styled>
                </Col>
                <Col xs={6}>
                  <StyledGrandchildrenDiv des="#f5365c" sou="#f56036">
                    <div style={{ padding: '5px' }}>
                      <AdminHomeParkingIcon width={'2em'} height={'2em'} />
                    </div>
                  </StyledGrandchildrenDiv>
                </Col>
              </Row>
            </StyledDiv>
          </Col>
          <Col xs={24} sm={12} lg={5} style={{ textAlign: 'center' }}>
            <StyledDiv>
              <Row gutter={[24, 16]}>
                <Col xs={18}>
                  <H5Styled>Capacity car :{capacity_car}</H5Styled>
                  <H5Styled> Available:{empty_car} </H5Styled>
                </Col>
                <Col xs={6}>
                  <StyledGrandchildrenDiv des="#f5365c" sou="#f56036">
                    <div style={{ padding: '5px' }}>
                      <GreenTickIcon width={'2em'} height={'2em'} />
                    </div>
                  </StyledGrandchildrenDiv>
                </Col>
              </Row>
            </StyledDiv>
          </Col>
          <Col xs={24} sm={12} lg={6} style={{ textAlign: 'center' }}>
            <StyledDiv>
              <Row gutter={[24, 16]}>
                <Col xs={18}>
                  <H5Styled>Capacity motor :{capacity_motor}</H5Styled>
                  <H5Styled> Available:{empty_motor} </H5Styled>
                </Col>
                <Col xs={6}>
                  <StyledGrandchildrenDiv des="#f5365c" sou="#f56036">
                    <div style={{ padding: '9px' }}>
                      <NewUserIcon width={'2.5em'} height={'2.5em'} />
                    </div>
                  </StyledGrandchildrenDiv>
                </Col>
              </Row>
            </StyledDiv>
          </Col>
          <Col xs={24} sm={12} lg={7} style={{ textAlign: 'center' }}>
            <StyledDiv>
              <Row gutter={[24, 16]}>
                <Col xs={18}>
                  <H5Styled>Car month: {car_ticket} VND</H5Styled> 
                  <H5Styled>Motor month: {motor_ticket} VND</H5Styled>
                </Col>
                <Col xs={6}>
                  <StyledGrandchildrenDiv des="#f5365c" sou="#f56036">
                    <div style={{ padding: '5px' }}>
                      <MoneyIcon width={'2em'} height={'2em'} />
                    </div>
                  </StyledGrandchildrenDiv>
                </Col>
              </Row>
            </StyledDiv>
          </Col>
        </Row>
        {/* <Row justify="center" gutter={[16, 16]}>
          <Col xs={24} sm={12}>
            <StyledDivChart top={'-56px'}>
              <VerticalBarChart />
              <br />
            </StyledDivChart>
          </Col>
          <Col xs={24} sm={12}>
            <StyledDivChart top={'-56px'}>
              <PieChart />

              <br />
            </StyledDivChart>
          </Col>
        </Row> */}
      </Col>
    </>
  )
}

export default Adminhome
