import React, { useEffect, useState } from "react";
import {
  Form,
  Row,
  Col,
  Typography,
  Radio,
} from "antd";
const { Title } = Typography;

function MedicalHistoryForm(props) {
  const [state, setState] = useState({
    
  });

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
    console.log(e.target.value, e.target.name, state)
  };
  const onFinish = (values) => {
    console.log("Success:", state);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  useEffect(() => {
    props.onChange({medical: state});
  }, [state]);
  const ShowRadioGroup = (props) => {
    return (
      <Radio.Group style={{ width: "100%" }} value={state[props.name]} name={props.name} onChange={handleChange}>
        <Radio
          key={1}
          value={1}
        >
        </Radio>
        <Radio
          key={2}
          value={2}
        >
        </Radio>
        <Radio
          key={3}
          value={3}
        >
        </Radio>
      </Radio.Group>
    );
  }

  return (
    <div style={{ padding: "30px 100px" }}>
      <Form
        name="basic"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Title level={2} align="center">
          Medical History
        </Title>
        <Row
          gutter={24}
          style={{ color: "maroon", fontSize: 18, fontWeight: 600 }}
        >
          <Col xs={{ span: 24 }} lg={{ span: 12 }}>
            <Row justify="space-between">
              <Col span={16}><Title level={3} align="left">Medical</Title></Col>
              <Col span={8}>o / o / o</Col>
              <Col span={16}><p>Allergies</p></Col>
              <Col span={8}><ShowRadioGroup name="allergies" /></Col>
              <Col span={16}><p>Allergies to Medication</p></Col>
              <Col span={8}><ShowRadioGroup name="allergiesToMedication" /></Col>
              <Col span={16}><p>Cancer</p></Col>
              <Col span={8}><ShowRadioGroup name="cancer" /></Col>
              <Col span={16}><p>Diabetes</p></Col>
              <Col span={8}><ShowRadioGroup name="Diabetes" /></Col>
              <Col span={16}><p>Past Strokes</p></Col>
              <Col span={8}><ShowRadioGroup name="pastStrokes" /></Col>
              <Col span={16}><p>Heart Disease</p></Col>
              <Col span={8}><ShowRadioGroup name="heartDisease" /></Col>
              <Col span={16}><p>Asthma</p></Col>
              <Col span={8}><ShowRadioGroup name="asthma" /></Col>
              <Col span={16}><p>High Blood Pressure</p></Col>
              <Col span={8}><ShowRadioGroup name="highBloodPressure" /></Col>
              <Col span={16}><Title level={3} align="left">Surgical</Title></Col>
              <Col span={8}></Col>
              <Col span={16}><p>Surgery</p></Col>
              <Col span={8}><ShowRadioGroup name="Surgery" /></Col>
            </Row>
          </Col>
          <Col xs={{ span: 24 }} lg={{ span: 12 }}>
          <Row justify="space-between">
              <Col span={16}><Title level={3} align="left">Social History</Title></Col>
              <Col span={8}>o / o / o</Col>
              <Col span={16}><p>Smoking/Vaping</p></Col>
              <Col span={8}><ShowRadioGroup name="smoking" /></Col>
              <Col span={16}><p>Alcohol Consumption</p></Col>
              <Col span={8}><ShowRadioGroup name="alcohol" /></Col>
              <Col span={16}><p>Caffein Consumption</p></Col>
              <Col span={8}><ShowRadioGroup name="caffein" /></Col>
              <Col span={16}><Title level={3} align="left">Family</Title></Col>
              <Col span={8}></Col>
              <Col span={16}><p>Diabetes</p></Col>
              <Col span={8}><ShowRadioGroup name="f_diabetes" /></Col>
              <Col span={16}><p>Heart Disease</p></Col>
              <Col span={8}><ShowRadioGroup name="f_heartDisease" /></Col>
              <Col span={16}><p>Cancer</p></Col>
              <Col span={8}><ShowRadioGroup name="f_cancer" /></Col>
              <Col span={16}><p>Alzheimer's</p></Col>
              <Col span={8}><ShowRadioGroup name="alzheimer" /></Col>
              <Col span={16}><p>High Blood Pressure</p></Col>
              <Col span={8}><ShowRadioGroup name="f_highBloodPressure" /></Col>
              <Col span={16}><Title level={3} align="left">Immunizations</Title></Col>
              <Col span={8}></Col>
              <Col span={16}><p>Flu Shot in the last six months</p></Col>
              <Col span={8}><ShowRadioGroup name="fluShot" /></Col>
              <Col span={16}><p>Tetanus Shot in last 10 years</p></Col>
              <Col span={8}><ShowRadioGroup name="tetanusShot" /></Col>
            </Row>
          </Col>
        </Row>
      </Form>
    </div>
  );
}
export default MedicalHistoryForm;
