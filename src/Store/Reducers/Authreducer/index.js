import {
  AUTH_LOGIN,
  AUTH_REGISTER,
  AUTH_REGISTER_SUCCESS,
  AUTH_LOGIN_SUCCESS,
  AUTH_FAIL,
} from "../../Action/auth";

const initialValues = {
  loading: false,
  data: null,
  error: null,
};

const authReducer = (state = initialValues, action) => {
  switch (action.type) {
    case AUTH_LOGIN:
      return (state = {
        ...state,
        loading: true,
      });
    case AUTH_REGISTER:
      return (state = {
        ...state,
        loading: true,
      });

    case AUTH_REGISTER_SUCCESS:
      return (state = {
        ...state,
        loading: false,
      });

    case AUTH_LOGIN_SUCCESS:
      return (state = {
        ...state,
        loading: false,
        data: action.payload,
      });

    case AUTH_FAIL:
      return (state = {
        ...state,
        loading: false,
        error: action.payload,
      });

    default:
      return state;
  }
};

export default authReducer;
