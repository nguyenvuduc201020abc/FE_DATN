import { Col, Row } from 'antd'
import {
  StyledDiv,
  StyledDivChart,
  StyledGrandchildrenDiv
} from '../../../styled/styledListOfDevice/styledComponent'
import {
  H5Styled,
  SpanStyled
} from '../../../styled/HomeStyledComponent/listStyled'
import AdminHomeParkingIcon from '../../../icons/aminHomeParkingIcon'
import GreenTickIcon from '../../../icons/greenTickIcon'
import MoneyIcon from '../../../icons/moneyIcon'
import { useEffect, useState } from 'react'
import moment from 'moment'
import axios from 'axios'
import { BASE_URL } from '../../../../api/requet'
import { WaveChart } from '../../../chart/waveChart'
import { VerticalBarChartCode } from '../../../chart/verticalBarChartCode'

const RevenuePakingCode = () => {
  const [parkingCode, setParkingCode] = useState()
  const [skip, setSkip] = useState(0)
  const [pageSize, setPageSize] = useState(10)
  const [currentMonth, setCurrentMonth] = useState('')
  const [monthRevenue, setMonthRevenue] = useState()
  const [totalVehicleTrue, setTotalVehicleTrue] = useState()
  const [totalVehicleFalse, setTotalVehicleFalse] = useState()
  const [vehicleInParking, setVehicleInParking] = useState()
  const [vehicleSent, setVehicleSent] = useState()
  useEffect(() => {
    const monthNumber = parseInt(moment().format('M'))
    setCurrentMonth(monthNumber)
  }, [currentMonth])
  // useEffect(() => {
  //   const initialValues = sessionStorage.getItem('parking_name')
  //   setParkingName(initialValues)
  // }, [])
  // useEffect(() => {
  //   const monthNumber = parseInt(moment().format('M'))
  //   setCurrentMonth(monthNumber)
  // }, [currentMonth])
  // useEffect(() => {
  //   if (currentMonth !== '') {
  //     console.log('mao', currentMonth)
  //     const getData = async () => {
  //       const response = await axios.get(
  //         `${BASE_URL}bill/revenue/month?Month=${currentMonth}&ParkingCode=${parkingCode}`
  //       )
  //       setMonthRevenue(response.data.revenve)
  //       console.log('doanh', response.data.revenve)
  //     }
  //     getData()
  //   }
  // }, [currentMonth])
  // useEffect(() => {
  //   if (currentMonth !== '') {
  //     const getData = async () => {
  //       const response = await axios.get(
  //         `${BASE_URL}entryVehicles/parkingCode/month?ParkingCode=${parkingCode}&Month=${currentMonth}`
  //       )
  //       setTotalVehicleTrue(response.data.totalVehiclesTrue)
  //       setTotalVehicleFalse(response.data.totalVehiclesFalse)
  //     }
  //     getData()
  //   }
  // }, [parkingCode, currentMonth])
  useEffect(() => {
    // Gọi API ở đây. Ví dụ:
    axios.get(`${BASE_URL}/statisticDetailParking?month=${parseInt(moment().format('M'))}&parking_name=${sessionStorage.getItem('parking_name')}`)
      .then(response => {
        // Giả định API trả về số lượng bãi đỗ xe.
        // Cập nhật giá trị cho totalItemPark
        console.log(response.data);
        setMonthRevenue(response.data.revenue);
        setVehicleInParking(response.data.numberVehicleInParking);
        setVehicleSent(response.data.numberVehicleSent);
      })
      .catch(error => {
        console.error('Error fetching data from API:', error);
      });
  }, []);
  return (
    <>
      <Row justify="center">
        <Col span={20} style={{ marginLeft: '18px' }}>
          <Row gutter={[32, 16]}>
            <Col xs={24} sm={12} lg={8} style={{ textAlign: 'center' }}>
              <StyledDiv>
                <Row gutter={[24, 16]}>
                  <Col xs={18}>
                    <H5Styled>Number vehicle in parking : </H5Styled>
                    <SpanStyled>{vehicleInParking} vehicles</SpanStyled>
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
            <Col xs={24} sm={12} lg={8} style={{ textAlign: 'center' }}>
              <StyledDiv>
                <Row gutter={[24, 16]}>
                  <Col xs={18}>
                    <H5Styled>Number of vehicle sent :</H5Styled>
                    <SpanStyled>{vehicleSent} vehicles</SpanStyled>
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
            <Col xs={24} sm={12} lg={8} style={{ textAlign: 'center' }}>
              <StyledDiv>
                <Row gutter={[24, 16]}>
                  <Col xs={18}>
                    <H5Styled>Revenue of month {currentMonth} :</H5Styled>
                    <SpanStyled>{monthRevenue} VND</SpanStyled>
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
        </Col>
      </Row>
      <Row style={{ marginTop: '40px' }}>
        <Col span={23} style={{ marginLeft: '18px' }}>
          <Row justify="center" gutter={[16, 16]}>
            <Col xs={24} sm={12}>
              <StyledDivChart top={'-56px'}>
                <WaveChart />
                <br />
              </StyledDivChart>
            </Col>
            <Col xs={24} sm={12}>
              <StyledDivChart top={'-56px'}>
                <VerticalBarChartCode />
                <br />
              </StyledDivChart>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  )
}

export default RevenuePakingCode
