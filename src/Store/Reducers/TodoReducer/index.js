import {
  ADD_ITEM,
  ADD_ITEM_SUCCESS,
  ADD_ITEM_FAIL,
  ALL_TODO,
  ALL_TODO_SUCCESS,
  DELETE_TASK,
  DELETE_SUCCESS,
  UPDATE_TASK,
  UPDATE_TASK_SUCCESS,
  INPUT_CHANGE,
} from "../../Action/todo/index";

const initialValues = {
  loading: false,
  data: [],
  error: null,
};

const todoReducer = (state = initialValues, action) => {
  switch (action.type) {
    case INPUT_CHANGE: {
      return { ...state, data: { ...state.data, data: action.payload } };
    }
    case ALL_TODO:
    case ADD_ITEM:
    case UPDATE_TASK:
    case DELETE_TASK:
      return (state = {
        ...state,
        loading: true,
      });

    case ALL_TODO_SUCCESS:
      return (state = {
        ...state,
        loading: false,
        data: action.payload,
      });

    case ADD_ITEM_SUCCESS: {
      return {
        ...state,
        loading: false,
        data: {
          ...state.data,
          data: [...state.data.data, action.payload.data],
        },
      };
     
    }

    case DELETE_SUCCESS: {
      return {
        ...state,
        loading: false,
        data: {
          ...state.data,
          data: state.data.data.filter((v) => v._id !== action.payload),
        },
      };
    }

    case UPDATE_TASK_SUCCESS:
      return (state = {
        ...state,
        loading: false,
      });

    case ADD_ITEM_FAIL:
      return (state = {
        ...state,
        loading: false,
        error: action.payload,
      });

    default:
      return state;
  }
};

export default todoReducer;


 // return {
      //   ...state,
      //   loading: false,
      //   data: {
      //     ...state.data,
      //     data: state.data.data,
      //   },
      // };