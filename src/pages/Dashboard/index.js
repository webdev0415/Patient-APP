import React, { useState } from "react";
import {
    Steps,
    Result,
    Button,
    Row,
    Col,
    Card
} from "antd";
import { SmileOutlined } from '@ant-design/icons';
import SignupForm from '../../components/Forms/RegisterForm';
import MedicalHistory from '../../components/Forms/MedicalHistoryForm';
import VisitReason from '../../components/Forms/VisitReason';
import Insurance from '../../components/Forms/Insurance';
import Appointment from '../../components/Forms/Appointment';
import Payment from '../../components/Forms/Payment';
import Complete from '../../components/Forms/Complete';

const { Step } = Steps;

function StepDashboard(props) {
    const [current, setCurrent] = useState(0);
    const onNext = () => {
        setCurrent(current + 1);
    }
    const onPrev = () => {
        setCurrent(current - 1);
    }
    const [state, setState] = useState({});
    const handleChange = (value) => {
        setState({
            ...state,
            ...value
        });
    }
    return (
    <div className="flex">
        <div style={{width:"20%", padding:40, height:"100%"}}>
            <Steps direction="vertical" current={current}>
                <Step title="Demographics" description={<br />} />
                <Step title="Health History" description={<br />} />
                <Step title="Visit Reason" description={<br />} />
                <Step title="Appoinment" description={<br />} />
                <Step title="Insurance" description={<br />} />
                <Step title="Payment" description={<br />} />
            </Steps>
        </div>
        <div style={{width:"100%", borderLeft:"1px solid black",}}>
            <div style={{borderBottom:"1px solid black", height:"100%"}}>
                {current === 0 && <SignupForm onChange={handleChange} />}
                {current === 1 && <MedicalHistory onChange={handleChange} />}
                {current === 2 && <VisitReason onChange={handleChange} />}
                {current === 3 && <Appointment onChange={handleChange} />}
                {current === 4 && <Insurance onChange={handleChange} />}
                {current === 5 && <Payment onChange={handleChange} />}
                {current === 6 && <Complete onChange={handleChange} />}
                {current === 7 && <Result
                    style={{paddingTop:150}}
                    icon={<SmileOutlined />}
                    title="Thank you for using this app!"
                    // extra={<Button type="primary">Next</Button>}
                />}
            </div>
            <Card>
                <Row justify="space-between">
                    <Col span={2}><Button type="primary" style={{minWidth:100}} onClick={onPrev} disabled={current === 0 ? true : false} >Previous</Button></Col>
                    <Col span={2}><Button type="primary"style={{minWidth:100}}  onClick={onNext} >{current !== 7 ? "Next" : "Finish"}</Button></Col>
                </Row>
            </Card>
                
            {/* </div> */}
        </div>
    </div>
  );
}
export default StepDashboard;
