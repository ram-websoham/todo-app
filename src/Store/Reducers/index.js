import { combineReducers } from "redux";

import authReducer from "./Authreducer";
import todoReducer from "./TodoReducer";

const rootReducer = combineReducers({
  authReducer,
  todoReducer
});

export default rootReducer;