import React, { useState } from 'react';
import {useSelector, useDispatch} from "react-redux";
import classNames from 'classnames';
import OtpInput from 'react-otp-input';
import { Helmet } from 'react-helmet';
import * as _ from 'lodash';
import PhoneInput from 'react-phone-input-2';
import { Link } from 'react-router-dom';
import { Form, Input, Button, Checkbox, Typography, Divider } from 'antd';
import 'react-phone-input-2/lib/style.css';
import classes from './signup.module.css';
import LogoComponent from '../../components/Logo';
import { authSelector } from '../SignIn/selector';

const SignUp = () => {
	const { Title, Paragraph, Text } = Typography;
	const [phone, setPhone] = useState()
	const [otpValue, setOtpValue] = useState("")
	const isExist = useSelector(authSelector)?.isExist;

	const onSubmit = (form) => e => {
		e.preventDefault()
		// form.validateFields((err, values) => {
		// 	console.log("valuse", values)
	 //      if (!err) {
	      	
	 //        if (!isExist) {
	 //          // localStorage.setItem('loginEmail', JSON.stringify(values));
	 //          // dispatch(loginUser(values))
	 //        } else if (isExist) {
	 //          const params = JSON.parse(localStorage.getItem('loginEmail'));
	 //          // const data = _.assign(params, {code: values.code})
	 //          // loginOtpConfirm(data)
	 //        }
	 //      }
	 //    });
	}
	return (
		<div className={classNames(classes.signup_wraper)}>
			<Helmet>
		        <title>SignUp</title>
		        <meta name="description" content="MICA SignUp" />
		    </Helmet>

			<Form
		      name="normal_signup"
		      className={classNames(classes.signup_form)}
		      onSubmit={onSubmit}
		    >
		    	<LogoComponent />
		    	<Form.Item
			        name="username"
			        label="Username"
			        rules={[{ required: true, message: 'Please input your Username!' }]}
			    >
			        <Input placeholder="Username" id="username"/>
			    </Form.Item>
		    	<Form.Item
			        name="email"
			        label="E-mail"
			        rules={[
			          {
			            type: 'email',
			            message: 'The input is not valid E-mail!',
			          },
			          {
			            required: true,
			            message: 'Please input your E-mail!',
			          },
			        ]}
			    >
			        <Input placeholder="E-mail" id="email"/>
			    </Form.Item>
			    <Form.Item 
			        name="phone"
			        label="Phone Number"
			        rules={[{ required: true, message: 'Please input your phone number!' }]}
			    >
			        <PhoneInput
			          	inputClass="phoneinput"
			          	country={'us'}
			          	inputProps={{
			            	name: 'phone',
			            	required: true,
			          	}}
			          	value={phone}
			          	onChange={phone=>setPhone(phone)}
			        />
			      </Form.Item>
			    <Form.Item 
			    	name="code"
			    	label="OTP"
			    	rules={[
			    		{
			    	        required: isExist,
			    	        message: 'Please input the code!',
			    	        whitespace: true,
			    	    },
			    	]}
			    >
			        <OtpInput
			            value={otpValue}
			            onChange={otpValue => setOtpValue(otpValue)}
			            numInputs={4}
			            separator={<span>-</span>}
			            containerStyle={classNames(classes.otp_container_styles)}
			            inputStyle={classNames(classes.otp_input_styles)}
			        />
			    </Form.Item>
			    <Form.Item>
				    <Button type="primary" htmlType="submit" className={classNames(classes.signup_form_button)}>
			        	Sign Up
			        </Button>
			        <Paragraph>
				        By creating an account, you agree to our <Link>Conditions of Use</Link> and <Link>Privacy Notice</Link>.
				    </Paragraph>
				    <Divider />
				    <Paragraph>
				    	Already have an account? <Link to="/login">Sign In</Link>
				    </Paragraph>
				</Form.Item>
			</Form>
		</div>
		)
}
export default SignUp