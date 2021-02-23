import React, { useEffect, useState } from "react";
import {
  Form,
  Row,
  Col,
  Typography,
  Input,
  Select
} from "antd";
import { PaymentCard } from 'react-ui-cards';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
const { Title, Text } = Typography;
function Payment(props) {
  const [state, setState] = useState({
    name:'',
    number: '',
    expiry: '',
    cvc: '',
    focus:'',
  });
  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
    console.log(e.target.name);
  };
  const handleFocus = (e) => {
    setState({
      ...state,
      focus: e.target.name,
    })
  }
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
          <Col xs={{ span: 24 }} lg={{ span: 8 }} >
            <div id="PaymentForm">
              <Cards
                cvc={state.cvc}
                expiry={state.expiry}
                focused={state.focus}
                name={state.name}
                number={state.number}
                preview={true}
                issuer="visa"
              />
            </div>
          </Col>
          <Col xs={{ span: 24 }} lg={{ span: 8 }} style={{paddingTop:10}}>
            <Input
              value={state.number}
              name="number"
              onChange={handleChange}
              onFocus={handleFocus}
              placeholder="Number"
              style={{marginBottom:40}}
            />
            <Input
              value={state.name}
              name="name"
              onChange={handleChange}
              placeholder="Name"
              style={{marginBottom:40}}
            />
            <div className="flex">
              <Input
                className="mb"
                value={state.expiry}
                name="expiry"
                onChange={handleChange}
                placeholder="Valid Thru"
                style={{width:"70%", marginRight:10}}
              />
              <Input
                className="mb"
                value={state.cvc}
                name="cvc"
                onChange={handleChange}
                placeholder="CVC"
                style={{width:"30%"}}
              />
            </div>
            
          </Col>
          <Col xs={{ span: 24 }} lg={{ span: 8 }} style={{paddingTop:10,borderLeft:"1px solid grey"}} >
            <Input
              value={state.addressFirst}
              name="addressFirst"
              onChange={handleChange}
              placeholder="Address Line 1"
              style={{ marginBottom:40 }}
            />
            <Input
              value={state.addressSec}
              name="addressSec"
              onChange={handleChange}
              placeholder="Address Line 2"
              style={{marginBottom:40}}
            />
            <div className="flex" >
              <Input className="mb" value={state.city} name="city" onChange={handleChange} style={{ width:"40%", marginRight:10 }} placeholder="city" />
              <Select
                style={{ width:"40%", marginRight:10 }}
                mode="single"
                placeholder="state"
                name="state"
                value={state.state}      
              >
                {/* {phoneType.map((item, index) => {
                  return <Select.Option key={index}>{item}</Select.Option>;
                })} */}
              </Select>
              <Input className="mb" value={state.zipCode} name="zipCode" onChange={handleChange} style={{ width:"20%" }} placeholder="Zip Code" />
            </div>
                
          </Col>
        </Row>
      </Form>
    </div>
  );
}
export default Payment;
