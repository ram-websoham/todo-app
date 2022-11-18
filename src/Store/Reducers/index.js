import { combineReducers } from "redux";

import authReducer from "./Authreducer";
import todoReducer from "./TodoReducer";

const appReducer = combineReducers({
  authReducer,
  todoReducer,
});

const rootReducer = (state, action) => {
  if (action.type === "LOGOUT") {
    return appReducer({}, action);
  }

  return appReducer(state, action);
};

export default rootReducer;
