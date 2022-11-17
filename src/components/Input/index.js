import React from "react";
import { useFormik } from "formik";
import { Button, Input, Form } from "antd";
import { useDispatch  } from "react-redux";
import { ADD_ITEM, ADD_ITEM_SUCCESS } from '../../Store/Action/todo';
import { PlusOutlined } from "@ant-design/icons";



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
    <Form onFinish={handleSubmit} className="todo_form">
      <Form.Item name="description" style={{ flex: 1 }}>
        <Input
          name="description"
          onChange={handleChange}
          placeholder="Enter todo item.."
        />
      </Form.Item>
      <div className="right">
        <Form.Item>
          <Button htmlType="submit" type="primary" ghost>
            <PlusOutlined />
          </Button>
        </Form.Item>
      </div>
    </Form>
  );
};

export default TodoInput;
