import React, { useEffect, useState } from "react";
import {
  Form,
  Row,
  Col,
  Typography,
  Input,
} from "antd";
import { PaymentCard } from 'react-ui-cards';
const { Title, Text } = Typography;
function Payment(props) {
  const [state, setState] = useState({
    name:'',
    number: '',
    validthru: '',
    cvv: '',
  });
  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
    console.log(e.target.name);
  };
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  useEffect(() => {
    props.onChange({payment: state});
  }, [state]);

  return (
    <div style={{ padding: "30px 100px" }}>
      <Form
        name="basic"
        initialValues={{ names: ["a"] }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Title level={2} align="center">
          Payment
        </Title>
        <Row
          gutter={24}
          style={{ color: "maroon", fontSize: 18, fontWeight: 600 }}
          align="middle"
        >
          <Col xs={{ span: 24 }} lg={{ span: 12 }}>
            <p>Number<Text style={{ fontSize: 12 }} type="danger">{" (Required)"}</Text></p>
            <Input
              className="mb"
              value={state.number}
              name="number"
              onChange={handleChange}
              placeholder="0000 0000 0000 0000"
            />
            <p>Name<Text style={{ fontSize: 12 }} type="danger">{" (Required)"}</Text></p>
            <Input
              className="mb"
              value={state.name}
              name="name"
              onChange={handleChange}
              placeholder="Jonh Smith"
            />
            <p>Valid Thru<Text style={{ fontSize: 12 }} type="danger">{" (Required)"}</Text></p>
            <Input
              className="mb"
              value={state.validthru}
              name="validthru"
              onChange={handleChange}
              placeholder="12/18"
            />
            <p>CVV<Text style={{ fontSize: 12 }} type="danger">{" (Required)"}</Text></p>
            <Input
              className="mb"
              value={state.cvv}
              name="cvv"
              onChange={handleChange}
              placeholder="123"
            />
          </Col>
          <Col xs={{ span: 24 }} lg={{ span: 12 }} >
            <PaymentCard
              background="linear-gradient(135deg, #00b4db, #0083b0)"
              backgroundPattern="worldMap"
              number={state.number}
              date={state.validthru}
              name={state.name}
              cvv={state.cvv}
            />
          </Col>
        </Row>
      </Form>
    </div>
  );
}
export default Payment;
