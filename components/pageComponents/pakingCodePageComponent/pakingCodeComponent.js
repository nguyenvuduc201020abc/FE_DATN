import { Col, Row } from 'antd'
import { H5Styled } from '../../styled/HomeStyledComponent/listStyled'

const ParkingCodeComponent = () => {
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
  return (
    <>
      <Col span={23} style={{ marginLeft: '18px' }}>
        <Row gutter={[16, 16]}>
          <Col
            xs={24}
            sm={12}
            lg={12}
            style={{ marginTop: '50px', textAlign: 'center' }}
          >
            <H5Styled>Cho xe vào</H5Styled>
          </Col>
          <Col
            xs={24}
            sm={12}
            lg={12}
            style={{ marginTop: '50px', textAlign: 'center' }}
          >
            <H5Styled>Cho xe ra</H5Styled>
          </Col>
        </Row>
      </Col>
    </>
  )
}

export default ParkingCodeComponent
