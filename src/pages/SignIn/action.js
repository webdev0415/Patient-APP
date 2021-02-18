import axios from "axios"
import * as actionTypes from "./type";
import {SERVER_PORT, domain, CLIENT_ID, CLIENT_SECRET_TOKEN} from "../../config"
import { message } from "antd"
import setAuthToken from "../../helper/setAuthToken"
// import jwt_decode from "jwt-decode"
const data = {
  client_id: CLIENT_ID,
  client_secret: CLIENT_SECRET_TOKEN,
  phone_number: "",
  connection: "sms",
  send: "code",
};
const otpData = {
  client_id: CLIENT_ID,
  client_secret: CLIENT_SECRET_TOKEN,
  username: "haha",
  grant_type: "http://auth0.com/oauth/grant-type/passwordless/otp",
  connection: "sms",
  otp: "",
  realm: "sms",
};
const headers = {
  "content-type": "application/json",
}; 
// export const loginUser = ( loginData ) => {
//     return dispatch => {
//         axios
//         .post(`${SERVER_PORT}/api/auth/token_create`)
//         .then(res=>{
//             console.log("res", res)
//             if (!res.data[0].access_token) return false;
//             // saveToken(res.data[0].access_token)
//             // setAuthToken(res.data[0].access_token);
//             // const decoded = jwt_decode(res.data[0].access_token)
//             // dispatch(setCurrentUser(decoded))
//             // history.push("/account")
//         })
//         .catch(err=>{
//             message.error(err.message)
//         })
//     }
// }
export const loginUser = (data) => {
  return dispatch =>
    axios
      .post(
        `${domain}/passwordless/start`,
        data,
        headers
      )
      .then((res) => {
        dispatch({
          type: actionTypes.IS_OTP_SENT_SUCCESS,
          payload: { status: true },
        });
      })
      .catch((error) => {
        console.log(error, "res");
        dispatch({
          type: actionTypes.IS_OTP_SENT_FAILED,
          payload: { status: false, payload: error.response?.data },
        });
      });
};

export const verifyOtp = (data) => {
  return dispatch =>
    axios
      .post(
        `${domain}/oauth/token`,
        data,
        headers
      )
      .then((res) => {
        dispatch({ type: actionTypes.VERIFY_OTP_SUCCESS, payload: res });
      })
      .catch((error) => {
        console.log(error, "err");
        dispatch({ type: actionTypes.VERIFY_OTP_FAILED, payload: error.response?.data });
      });
};

const setLoading = (value) => {
    return dispatch => 
    dispatch({
        type: actionTypes.LOADING_REQUEST, 
        payload: value
    })
}