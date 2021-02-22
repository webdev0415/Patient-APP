import React, { useState } from "react";
import {
  Form,
  Row,
  Col,
  Typography,
} from "antd";
const { Title } = Typography;
function Complete(props) {
  const [state, setState] = useState({
  });
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  

  return (
    <div style={{ padding: "30px 100px" }}>
      <Form
        name="basic"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Title level={2} align="center">
          Complete
        </Title>
        <Row
          gutter={24}
          style={{ color: "maroon", fontSize: 18, fontWeight: 600, padding:"0px 150px" }}
        >
          <Col span={12} className="mb">Name</Col>
          <Col span={12}>{state.name}</Col>
          <Col span={12} className="mb">PhoneNumber</Col>
          <Col span={12}>{state.phoneNumber}</Col>
          <Col span={12} className="mb">Appointment Time</Col>
          <Col span={12}>{state.available}</Col>
          <Col span={12} className="mb">Location</Col>
          <Col span={12}>{state.location}</Col>
          <Col span={12} className="mb">Visit Reason</Col>
          <Col span={12}>{state.visitReason}</Col>
        </Row>
      </Form>
    </div>
  );
}
export default Complete;
