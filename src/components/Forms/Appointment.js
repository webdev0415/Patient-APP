import React, { useEffect, useState } from "react";
import {
  Form,
  Row,
  Radio,
  Typography,
  Input,
} from "antd";
const { Title, Text } = Typography;
function Appointment(props) {
  const [state, setState] = useState({
  });
  const handleChange = (e) => {
    const label = e.target.name ? e.target.name : e.target.id.split('_')[1];
    setState({
      ...state,
      [label]: e.target.value,
    });
    console.log(e.target)
  };
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  useEffect(() => {
    props.onChange({appointment: state});
  }, [state]);
  return (
    <div style={{ padding: "30px 100px" }}>
      <Form
        name="basic"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Title level={2} align="center">
          Where to be seen?
        </Title>
        <Row
          gutter={24}
          style={{ color: "maroon", fontSize: 18, fontWeight: 600 }}
        >
          <Radio.Group 
            optionType="button" 
            style={{ width: "100%", marginBottom: 16 }} 
            value={state.type} 
            name='type' 
            onChange={handleChange} 
            options={[
              { label: 'Virtual', value: 'Virtual'},
              { label: 'Physical', value: 'Physical'}
            ]}
            buttonStyle='solid'
          />
          <p>Available Time<Text style={{ fontSize: 12 }} type="danger">{" (Required)"}</Text></p>
          <Form.Item
            style={{width: "100%"}}
            type="date"
            className="mb"
            value={state.available}
            name="available"
            onChange={handleChange}
            rules={[  
              {
                required: true,
                message: "Please input your Available Time!",
              },
            ]}
          >
            <Input type="date" />
          </Form.Item>
          
          {
            state.type && state.type === "Physical" && <div style={{width: "100%"}}>
              <p>Location<Text style={{ fontSize: 12 }} type="danger">{" (Required)"}</Text></p>
              <Form.Item
                className="mb"
                value={state.location}
                name="location"
                onChange={handleChange}
                placeholder="Please input your location"
                rules={[
                  {
                    required: true,
                    message: "Please input your Location!",
                  },
                ]}
              >
                <Input />
              </Form.Item>
              
            </div>
          }
          
        </Row>
      </Form>
    </div>
  );
}
export default Appointment;
