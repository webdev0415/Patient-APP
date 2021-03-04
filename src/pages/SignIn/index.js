import React, { useState } from 'react';
import classNames from 'classnames';
import { Form, Input, Button, Checkbox, Typography, Divider } from 'antd';
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import OtpInput from 'react-otp-input';
import { Helmet } from 'react-helmet';
import * as _ from 'lodash';
import { Link } from 'react-router-dom';
import isEmail from "validator/lib/isEmail";
import ClipLoader from "react-spinners/ClipLoader";
import { CLIENT_ID, CLIENT_SECRET_TOKEN } from '../../config'
import { authSelector } from './selector';
import { loginUser, verifyOtp, setLoading } from "./action";
import LogoComponent from '../../components/Logo';
import classes from './signin.module.css';

const SignIn = () => {
	const { Title, Paragraph, Text } = Typography;
	const dispatch = useDispatch()
	const [otpValue, setOtpValue] = useState("")
	const [isLoading, setIsLoading] = useState(false)
	const isOtpSent = useSelector(authSelector)?.isOtpSent;
	const isPhoneNum = value => {
		console.log("value", value)
		const pattern = /^\+([0-9]{11}|[0-9]{12}|[0-9]{13}|[0-9]{14})$/;
		if(value.match(pattern)) {
			console.log("true")
		    return true;
		}
		  else {
		  	console.log("false")
		    return false;
		}
	}

	const onSubmit = async (values) => {
		setIsLoading(true)
		// dispatch(setLoading(true))
		if (!isOtpSent) {
			localStorage.setItem('loginID', values.loginID);
			if (isPhoneNum(values.loginID)) {
		        const data = {
					client_id: CLIENT_ID,
					client_secret: CLIENT_SECRET_TOKEN,
					connection: "sms",
					send: "code",
				};
		        await dispatch(loginUser({ ...data, 'phone_number': values.loginID }))
		        setIsLoading(false)
	        } else if (isEmail(values.loginID)) {
		        const data = {
					client_id: CLIENT_ID,
					client_secret: CLIENT_SECRET_TOKEN,
					connection: "email",
					send: "code",
				};
		        await dispatch(loginUser({ ...data, 'email': values.loginID }))
		        setIsLoading(false)
	        }
	    } else {
	    	const loginID = localStorage.getItem('loginID');
	    	console.log(loginID, typeof "+16462806850")
	    	if (isPhoneNum(loginID)) {
	    		console.log("phone")
	    		const otpData = {
				  client_id: CLIENT_ID,
				  client_secret: CLIENT_SECRET_TOKEN,
				  grant_type: "http://auth0.com/oauth/grant-type/passwordless/otp",
				  connection: "sms",
				  realm: "sms",
				  send: "code"
				};
				await dispatch(verifyOtp({ ...otpData, opt: values.code, number: loginID}))
				setIsLoading(false)
	    	} else if (isEmail(loginID)) {
	    		console.log("email")
	    		const otpData = {
				  client_id: CLIENT_ID,
				  client_secret: CLIENT_SECRET_TOKEN,
				  grant_type: "http://auth0.com/oauth/grant-type/passwordless/otp",
				  connection: "email",
				  realm: "email",
				  send: "code"
				};
				await dispatch(verifyOtp({ ...otpData, opt: values.code, email: loginID}))
				setIsLoading(false)
	    	}
	    }
	}
	return (
		<div className={classNames(classes.all)}>
			
			<div className={classNames(classes.login_wraper)}>
				<Helmet>
			        <title>SignIn</title>
			        <meta name="description" content="Patient-App Login" />
			    </Helmet>
				<Form
			      name="normal_login"
			      className={classNames(classes.login_form)}
			      initialValues={{ remember: true }}
			      onFinish={onSubmit}
			      layout="vertical"
			    >
			    <Paragraph className={classNames(classes.logo)}>Logo</Paragraph>
			    <Paragraph className={classNames(classes.wel_text)}>Welcome to your Digital Front door!</Paragraph>
			    {!isOtpSent ? (
	              <Paragraph className={classNames(classes.desc)}>
	                Where you will help your doctor out by providing the necessary information to have a <strong>successful visit</strong>
	              </Paragraph>
	            ) : (
	              <Paragraph className={classNames(classes.desc)}>
	                Please enter your one time password to proceed with registration process.
	              </Paragraph>
	            )}	
	            {!isOtpSent ? (
	            	<Form.Item
				        name="loginID"
				        rules={[
				          {
				            required: true,
				            message: 'Please input your Mobile Phone!',
				          },
				        ]}
				    >
				        <Input placeholder="Enter Your Mobile Number" id="loginID"/>
				    </Form.Item>
	            ) : (
	            	<Form.Item 
				    	name="code"
				    	rules={[
				    		{
				    	        required: isOtpSent,
				    	        message: 'Please input the password	code!',
				    	        whitespace: true,
				    	    },
				    	]}
				    >
				        <OtpInput
				            value={otpValue}
				            onChange={otpValue => setOtpValue(otpValue)}
				            numInputs={6}
				            separator={<span>-</span>}
				            containerStyle={classNames(classes.otp_container_styles)}
				            inputStyle={classNames(classes.otp_input_styles)}
				        />
				    </Form.Item>
	            )}
				    <Form.Item>
					    <Button type="primary" htmlType="submit" className={classNames(classes.login_form_button)}>
				        	{!isOtpSent && !isLoading && "Submit" }
				        	{isOtpSent && !isLoading && "Verify"}
				        	<ClipLoader color="#ffffff" loading={isLoading}  size={30} /> 
				        </Button>				    
					</Form.Item>
				</Form>
			</div>
			<div className={classNames(classes.image)}>
				<LogoComponent />
			</div>
		</div>
		)
}
export default SignIn;