import React, { useEffect, useState } from "react";
import {
  Form,
  Input,
  Button,
  Row,
  Col,
  Typography,
  Checkbox,
  Select,
  Radio,
  Tag,
  InputNumber,
} from "antd";
import { CloseOutlined } from "@ant-design/icons";
import Link from "react-router-dom/Link";
import PhoneInput from "react-phone-number-input";
import Autocomplete from "react-google-autocomplete";
import "react-phone-number-input/style.css";
import axios from "axios";
import { CONFIG } from "../../config/";
const { Title, Text } = Typography;

function SignupForm(props) {
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    birth: undefined,
    birthYear: undefined,
    birthMonth: undefined,
    birthDay: undefined,
    gender: 0,
    phoneNumber: 0,
    phoneType: "ca",
    addressFirst: "",
    addressSec: "",
    city: "",
    state: "",
    email: "",
    ethincity: [],
    prefer: false,
    zipCode: "",
  });
  useEffect(() => {
    props.onChange({demographics: state});
  }, [state]);
  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const onChange = (value) => {
    setState({
      ...state,
      phoneNumber: value,
    });
  };
  const tagRender = (props) => {
    const { label, closable, onClose } = props;

    return (
      <Tag
        color="#ff3333"
        closable={closable}
        onClose={onClose}
        style={{ margin: 3 }}
      >
        {label}
      </Tag>
    );
  };
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const handleEthincity = (e) => {
    if (e.target.checked) {
      setState({ ...state, prefer: e.target.checked, ethincity: ["Other"] });
    } else setState({ ...state, prefer: e.target.checked });
  };
  const handleSelect = (value) => {
    setState({ ...state, ethincity: value });
  };

  const getZipCodeDetails = async (zipCode) => {
    const url = `${CONFIG.RADAR_ENDPOINT}/v1/geocode/forward?query=${zipCode}`;

    const res = await axios.get(url, {
      headers: { Authorization: CONFIG.RADAR_PUBLISHABLE_KEY },
    });

    if (res.status === 200) {
      setState({
        ...state,
        city: res.data.addresses[0].city,
        state: res.data.addresses[0].state,
      });
    }
  };
  const phoneType = state.state ? [state.state] : [];
  const children = [
    "White",
    "Black/African American",
    "Asian",
    "Mediterranean",
    "Pacific Islander",
    "Hispanic",
    "American Indian",
    "Other",
    "Indian",
    "Middle Eastern",
  ];

  return (
    <div style={{ padding: "30px 100px" }}>
      <Form
        name="basic"
        initialValues={{ names: ["a"] }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Title level={4} align="center">
          Account Registration
        </Title>
        <Title level={3} align="center">
          Patient Info
        </Title>
        <Row
          gutter={24}
          style={{ color: "maroon", fontSize: 18, fontWeight: 600 }}
        >
          <Col xs={{ span: 24 }} lg={{ span: 8 }}>
            <p>
              {" "}
              First Name
              <Text style={{ fontSize: 12 }} type="danger">
                {" "}
                (Required)
              </Text>
            </p>
            <Form.Item
              value={state.firstName}
              name="firstName"
              onChange={handleChange}
              rules={[
                {
                  required: true,
                  message: "Please input your First Name!",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <p>
              {" "}
              Last Name
              <Text style={{ fontSize: 12 }} type="danger">
                {" "}
                (Required)
              </Text>
            </p>
            <Form.Item
              value={state.lastName}
              onChange={handleChange}
              name="lastName"
              rules={[
                {
                  required: true,
                  message: "Please input your Last Name!",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <p>
              {" "}
              Date of Birth
              <Text style={{ fontSize: 12 }} type="danger">
                {" "}
                (Required)
              </Text>
            </p>
            <Row gutter={8}>
              <Col span={8} key={0}>
                <Form.Item
                  name="birthMonth"
                  value={state.birthMonth}
                  onChange={(value) =>
                    setState({ ...state, birthMonth: value })
                  }
                  rules={[
                    {
                      required: true,
                      type: "number",
                      min: 1,
                      max: 12,
                      message: "Please input Month correctly!",
                    },
                  ]}
                >
                  <InputNumber placeholder="MM" />
                </Form.Item>
              </Col>
              <Col span={8} key={1}>
                <Form.Item
                  name="birthDay"
                  value={state.birthDay}
                  onChange={(value) => setState({ ...state, birthDay: value })}
                  rules={[
                    {
                      required: true,
                      type: "number",
                      min: 1,
                      max: 31,
                      message: "Please input Day correctly!",
                    },
                  ]}
                >
                  <InputNumber placeholder="DD" />
                </Form.Item>
              </Col>
              <Col span={8} key={2}>
                <Form.Item
                  name="birthYear"
                  value={state.birthYear}
                  onChange={(value) => setState({ ...state, birthYear: value })}
                  rules={[
                    {
                      required: true,
                      type: "number",
                      min: 1990,
                      message: "Please input Year correctly!",
                    },
                  ]}
                >
                  <InputNumber placeholder="YYYY" />
                </Form.Item>
              </Col>
            </Row>
            <p>
              {" "}
              Gender
              <Text style={{ fontSize: 12 }} type="danger">
                {" "}
                (Required)
              </Text>
            </p>
            <Form.Item
              name="gender"
              value={state.gender}
              onChange={handleChange}
              rules={[
                {
                  required: true,
                  message: "Please select your Gender!",
                },
              ]}
            >
              <Radio.Group style={{ width: "100%" }}>
                <Radio
                  value={1}
                  style={{ color: "maroon", fontSize: 18, fontWeight: 600 }}
                >
                  Male
                </Radio>
                <br />
                <Radio
                  value={2}
                  style={{ color: "maroon", fontSize: 18, fontWeight: 600 }}
                >
                  Female
                </Radio>
                <br />
                <Radio
                  value={3}
                  style={{ color: "maroon", fontSize: 18, fontWeight: 600 }}
                >
                  Transgender
                </Radio>
              </Radio.Group>
            </Form.Item>
            {console.log(state, "ress")}
          </Col>
          <Col xs={{ span: 24 }} lg={{ span: 8 }}>
            <p>
              {" "}
              Address{" "}
              <Text style={{ fontSize: 12 }} type="secondary">
                {" "}
                line1
              </Text>
              <Text style={{ fontSize: 12 }} type="danger">
                {" "}
                (Required)
              </Text>
            </p>
            <Form.Item
              value={state.addressFirst}
              name="addressFirst"
              onChange={handleChange}
              rules={[
                {
                  required: true,
                  message: "Please input your Address Line1!",
                },
              ]}
            >
              <Autocomplete
                style={{ width: "100%" }}
                onPlaceSelected={(place) => {
                  console.log(place);
                }}
                types={["(regions)"]}
              />
            </Form.Item>
            <p>
              {" "}
              Address{" "}
              <Text style={{ fontSize: 12 }} type="secondary">
                {" "}
                line2
              </Text>
            </p>
            <Form.Item
              value={state.addressSec}
              name="addressSec"
              onChange={handleChange}
            >
              <Autocomplete
                style={{ width: "100%" }}
                onPlaceSelected={(place) => {
                  console.log(place);
                }}
                types={["(regions)"]}
              />
            </Form.Item>
            <p>
              {" "}
              Zip Code{" "}
              <Text style={{ fontSize: 12 }} type="danger">
                {" "}
                (Required)
              </Text>
            </p>
            <Form.Item
              value={state.zipCode}
              name="zipCode"
              onChange={handleChange}
              onBlur={(event) => getZipCodeDetails(event.target.value)}
              rules={[
                {
                  required: true,
                  message: "Please input your Zip Code!",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Row gutter={8}>
              <Col span={16} key={0}>
                <p>
                  {" "}
                  City{" "}
                  <Text style={{ fontSize: 12 }} type="danger">
                    {" "}
                    (Required)
                  </Text>
                </p>
                {/* <Form.Item
                  name="city"
                  value={state.city}
                  onChange={handleChange}
                  rules={[
                    {
                      required: true,
                      message: "Please input City!",
                    },
                  ]}
                >
                 
                </Form.Item> */}
                <Input value={state.city} name="city" onChange={handleChange} />
              </Col>
              <Col span={8} key={1}>
                <p> State </p>
                <Select
                    mode="single"
                    placeholder="please select phone type"
                    style={{ width: "100%" }}       
                    value={state.state}      
                  >
                    {phoneType.map((item, index) => {
                      return <Select.Option key={index}>{item}</Select.Option>;
                    })}
                  </Select>
              </Col>
            </Row>
            <p>
              {" "}
              Email Address
              <Text style={{ fontSize: 12 }} type="danger">
                {" "}
                (Required)
              </Text>
            </p>
            <Form.Item
              value={state.email}
              name="eamil"
              onChange={handleChange}
              rules={[
                {
                  required: true,
                  type: "email",
                  message: "Please input your Email Adress correctly!",
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col xs={{ span: 24 }} lg={{ span: 8 }}>
            <p>
              Ethinicity
              <Text style={{ fontSize: 12 }} type="secondary">
                {" "}
                (may select more than one)
              </Text>
            </p>
            <Checkbox
              style={{ marginBottom: 16, color: "maroon", fontSize: 18 }}
              onClick={handleEthincity}
            >
              Prefer not to say
            </Checkbox>
            <Select
              mode="multiple"
              name="ethincity"
              tagRender={tagRender}
              placeholder="please select"
              style={{ width: "100%" }}
              value={state.ethincity}
              onChange={handleSelect}
              disabled={state.prefer}
            >
              {children.map((item, index) => {
                return (
                  <Select.Option key={index} value={item}>
                    {item}
                  </Select.Option>
                );
              })}
            </Select>

            <p>
              Phone Number
              <Text style={{ fontSize: 12 }} type="danger">
                {" "}
                (Required)
              </Text>
            </p>
            <Form.Item
              name="phoneNumber"
              onChange={onChange}
              rules={[{ required: true, message: "Missing Phone Number" }]}
              style={{ color: "maroon", fontSize: 18, fontWeight: 600 }}
            >
              <PhoneInput
                placeholder="(___)-___-___"
                style={{ width: "100%" }}
              />
            </Form.Item>
            <p>Phone Type</p>
            <div style={{ display: "flex" }}>
              <Select
                mode="single"
                placeholder="please select phone type"
                style={{ width: "100%" }}
              >
                {phoneType.map((item, index) => {
                  return <Select.Option key={index}>{item}</Select.Option>;
                })}
              </Select>
              <Button type="default" icon={<CloseOutlined />}></Button>
            </div>
            <p>{"Terms & Conditions"}</p>

            <Checkbox className="term">
              I agree to the following.{" "}
              <Link to="/" style={{ color: "maroon" }}>
                Terms of Use, HIPAA Security Agreement
              </Link>
            </Checkbox>
          </Col>
        </Row>
      </Form>
    </div>
  );
}
export default SignupForm;
