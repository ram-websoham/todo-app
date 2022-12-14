import { Button, Form, Input, InputNumber  } from "antd";
import React from "react";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AUTH_REGISTER } from "../../Store/Action/auth";
import Home from "../Home";


const layout = {
  labelCol: {
    span: 10,
  },
  wrapperCol: {
    span: 16,
  },
};


const Register = () => {

  const navigator = useNavigate();
  const dispatch = useDispatch();

  const { handleChange, handleBlur, handleSubmit, setFieldValue } = useFormik({
    initialValues: {
      name: "",
      email: "",
      age: "",
      password: "",
    },

    onSubmit: (values) => {
      dispatch({
        type: AUTH_REGISTER,
        payload: values,
        cb: () => {
          navigator('/login')
        },
      });
    },
  });

  return (
    <>
      <Home />
      <div className="register_form">
        <Form {...layout} name="nest-messages" onFinish={handleSubmit}>
          <h1>Register form</h1>

          <Form.Item name="name" label="Name">
            <Input
              onChange={handleChange}
              onBlur={handleBlur}
              name="name"
              className="input"
            />
          </Form.Item>

          <Form.Item name="email" label="Email">
            <Input
              onChange={handleChange}
              onBlur={handleBlur}
              name="email"
              className="input"
            />
          </Form.Item>

          <Form.Item name="age" label="Age">
            <InputNumber
              onChange={(value) => setFieldValue("age", value)}
              onBlur={handleBlur}
              name="age"
              className="input"
            />
          </Form.Item>

          <Form.Item name="password" label="Password">
            <Input.Password
              onChange={handleChange}
              onBlur={handleBlur}
              name="password"
              className="input"
            />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              ...layout.wrapperCol,
              offset: 10,
            }}
          >
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
          {/* <p>
            You want to need?
            <Link to={"/login"}>Login</Link>
          </p> */}
        </Form>
      </div>
    </>
  );
};
export default Register;
