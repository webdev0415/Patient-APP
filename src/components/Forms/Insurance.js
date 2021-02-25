import React, { useEffect, useState } from "react";
import {
  Form,
  Row,
  Col,
  Typography,
  Input,
  Image,
  Upload,
  Button,
  Modal
} from "antd";
import { PlusOutlined, CameraOutlined } from '@ant-design/icons';
import Camera from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';
// import camera from './camera';
const { Title } = Typography;
function Insurance(props) {
  const [state, setState] = useState({
    previewVisible: false,
    previewImage: '',
    previewTitle: '',
    fileList: [],
  });
  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
  };
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const getBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  }

  const handleUpload = async ({ file }) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    console.log("filename", file)
    setState({
      ...state,
      previewImage: file.url || file.preview,
      previewVisible: true,
      previewTitle: file.name || file.url.substring(file.url.lastIndexOf('/') + 1),
    });
  }
  useEffect(() => {
    props.onChange({insurance: state});
  }, [state]);
  const [isCameraVisible, setIsCameraVisible] = useState(false);

  const handleTakePhotoAnimationDone = (dataUri) => {
    setState({...state, previewImage: dataUri});
    setIsCameraVisible(false);
  }

  return (
    <div style={{ padding: "30px 100px" }}>
      <Form
        name="basic"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Title level={2} align="center">
          Insurance
        </Title>
        <Row
          gutter={24}
          style={{ color: "maroon", fontSize: 18, fontWeight: 600 }}
        >
          <Col md={{ span: 24 }} lg={{ span: 12 }}>
            {isCameraVisible ? <Camera 
              style={{width: 200}}
              onTakePhotoAnimationDone = { (dataUri) => { handleTakePhotoAnimationDone(dataUri); } }
            /> : 
            <Image
              alt="Uploaded Image"
              src={state.previewImage}
              width={400}
              height={400}
              fallback="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
              style={{border:'1px solid lightgrey'}}
            />}
            <br />
            <Upload
              className="mt-8"
              onChange={handleUpload}
              showUploadList={false}
            >
              <Button icon={<PlusOutlined />}>Upload</Button>
              
            </Upload>{'\t'}<Button icon={<CameraOutlined />} onClick = {() => setIsCameraVisible(true)}>Take a photo</Button>
            {/* <Button onClick = {() => camera.takeSnapshot()}>snap</Button> */}
          </Col>
          <Col md={{ span: 24 }} lg={{ span: 12 }} style={{borderLeft:"1px solid grey"}} >
            <p>Provider</p>
            <Form.Item
              value={state.provider}
              name="provider"
              onChange={handleChange}
            >
              <Input />
            </Form.Item>
            <p>Card Number</p>
            <Form.Item
              value={state.cardNumber}
              name="cardNumber"
              onChange={handleChange}
            >
              <Input />
            </Form.Item>
            <p>RxBin</p>
            <Form.Item
              value={state.rxbin}
              name="rxbin"
              onChange={handleChange}
            >
              <Input />
            </Form.Item>
            <p>RxPgm</p>
            <Form.Item
              value={state.rxpgm}
              name="rxpgm"
              onChange={handleChange}
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </div>
  );
}
export default Insurance;
