import { Col, Row } from 'antd'
import React, { memo } from 'react'
const Container = ({ children, backgroundColor }) => {
  return (
    <>
      <Row justify="end" style={{ backgroundColor: backgroundColor }}>
        <Col
          span={23}
          style={{
            marginTop: '20px',
            marginBottom: '20px',
            marginRight: '12px'
          }}
        >
          {children}
        </Col>
      </Row>
    </>
  )
}
export default memo(Container)
