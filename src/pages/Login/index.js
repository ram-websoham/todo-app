import { Button, Checkbox, Form, Input } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { AUTH_LOGIN } from "../../Store/Action/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { handleChange, handleSubmit } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    onSubmit: (values) => {
      dispatch({
        type: AUTH_LOGIN,
        payload: values,
        cb: () => {
          console.log("Login Success!");
          navigate("/dashboard");
        },
      });
    },

  });

  return (
    <>
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={handleSubmit}
        autoComplete="off"
      >
        <h1>Login Form</h1>
        <Form.Item label="Email" name="username">
          <Input name="email" onChange={handleChange} />
        </Form.Item>

        <Form.Item label="Password" name="password">
          <Input.Password name="password" onChange={handleChange} />
        </Form.Item>

        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
        <p>
          You want to need?
          <Link to={"/register"}>Register</Link>
        </p>
      </Form>
    </>
  );
  
};
export default Login;
