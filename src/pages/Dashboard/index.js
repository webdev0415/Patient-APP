import React, { useState } from "react";
import {
  Steps,
  Divider,
  Button,
  Row,
  Col,
  Card
} from "antd";

const { Step } = Steps;
const text = "A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world."
function StepDashboard(props) {
    const [current, setCurrent] = useState(0);
    const onNext = () => {
        setCurrent(current + 1);
    }
    const onPrev = () => {
        setCurrent(current - 1);
    }
    return (
    <div className="flex">
        <div style={{width:"20%", borderRight:"1px solid black", padding:40, height:"100%"}}>
            <Steps direction="vertical" current={current}>
                <Step title="Demographics" description={<br />} />
                <Step title="Health History" description={<br />} />
                <Step title="Visit Reason" description={<br />} />
                <Step title="Appoinment" description={<br />} />
                <Step title="Payment" description={<br />} />
                <Step title="Finish" description={<br />} />
            </Steps>
        </div>
        <div style={{width:"100%"}}>
            <div style={{borderBottom:"1px solid black", height:"100%"}}>

            </div>
            {/* <div style={{height:40, position:"absolute", bottom:0}}> */}
            <Card>
                <Row justify="space-between">
                    <Col span={2}><Button type="primary" style={{minWidth:100}} onClick={onPrev} disabled={current == 0 ? true : false} >Previous</Button></Col>
                    <Col span={2}><Button type="primary"style={{minWidth:100}}  onClick={onNext} >{current != 5 ? "Next" : "Finish"}</Button></Col>
                </Row>
            </Card>
                
            {/* </div> */}
        </div>
    </div>
  );
}
export default StepDashboard;
