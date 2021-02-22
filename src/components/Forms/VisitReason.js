import React, { useEffect, useState } from "react";
import {
  Form,
  Row,
  Col,
  Typography,
  Button,
} from "antd";
const { Title } = Typography;
function VisitReason(props) {
  const [current, setCurrent] = useState("");
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  useEffect(() => {
    props.onChange({visitReason: current});
  }, [current]);

  return (
    <div style={{ padding: "30px 100px" }}>
      <Form
        name="basic"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Title level={2} align="center">
          Why are you here?
        </Title>
        <Row
          gutter={24}
        >
          <Col xs={{ span: 24 }} md={{span: 12}} lg={{ span: 6 }}>
            <Button style={{width:"100%", height:"100px", marginBottom:12}} type={current === "Store Throat" ? "primary" : "default"} name="Store Throat" onClick={() => setCurrent("Store Throat")}>Store Throat</Button>
          </Col>
          <Col xs={{ span: 24 }} md={{span: 12}} lg={{ span: 6 }}>
            <Button style={{width:"100%", height:"100px", marginBottom:12}} type={current === "UTI" ? "primary" : "default"} name="UTI" onClick={() => setCurrent("UTI")}>UTI</Button>
          </Col>
          <Col xs={{ span: 24 }} md={{span: 12}} lg={{ span: 6 }}>
            <Button style={{width:"100%", height:"100px", marginBottom:12}} type={current === "Cold/Flu" ? "primary" : "default"} name="Cold/Flu" onClick={() => setCurrent("Cold/Flu")}>Cold/Flu</Button>
          </Col>
          <Col xs={{ span: 24 }} md={{span: 12}} lg={{ span: 6 }}>
            <Button style={{width:"100%", height:"100px", marginBottom:12}} type={current === "Covid" ? "primary" : "default"} name="Covid" onClick={() => setCurrent("Covid")}>Covid</Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
}
export default VisitReason;
