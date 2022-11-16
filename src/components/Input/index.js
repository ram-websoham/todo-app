import React from "react";
import { useFormik } from "formik";
import { Button, Input, Form } from "antd";
import { useDispatch  } from "react-redux";
import { ADD_ITEM, ADD_ITEM_SUCCESS } from '../../Store/Action/todo';


const TodoInput = () => {
  
  const dispatch = useDispatch();

  const { handleChange, handleSubmit } = useFormik({
    initialValues: {
      description: "",
    },

    onSubmit: (values) => {
      console.log(values);
      dispatch({
        type: ADD_ITEM,
        payload: values,
        cb: () => {
          console.log("Todo add Success!");
        },
      });   
    },
  });

  return (
    <Form onFinish={handleSubmit}>
      <Form.Item name="description">
        <Input
          name="description"
          onChange={handleChange}
          placeholder="Enter todo item.."
        />
      </Form.Item>
      <div className="right">
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Add Item
          </Button>
        </Form.Item>
      </div>
    </Form>
  );
};

export default TodoInput;
