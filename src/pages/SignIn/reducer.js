import * as actionTypes from "./type";
const isEmpty = require("is-empty");

const initState = {
	user: [],
	isAuthenticated: false,
	isOtpSent: false,
	errors: "",
	isLoading: false,
}
const authReducer = (state=initState, action) => {
	switch (action.type) {
		case actionTypes.SET_CURRENT_USER:
	        return {
	        	...state,
	        	user: action.payload,
	        	isAuthenticated: !isEmpty(action.payload)
	        }
	    case actionTypes.IS_OTP_SENT_SUCCESS:
	        return {
	        	...state,
	        	isOtpSent: action.payload.status
	        }
	    case actionTypes.IS_OTP_SENT_FAILED:
	        return {
	        	...state,
	        	isOtpSent: action.payload.status
	        }
	    case actionTypes.VERIFY_OTP_SUCCESS:
	        return {
	        	...state,
	        	user: action.payload,
	        	isAuthenticated: true
	        }
	    case actionTypes.VERIFY_OTP_FAILED:
	        return {
	        	...state,
	        	isAuthenticated: false,
	        	errors: action.payload
	        }
	    case actionTypes.LOADING_REQUEST:
	        return {
	        	...state,
	        	isLoading: true,
	        }
		default:
			return state
	}
}

export default authReducer