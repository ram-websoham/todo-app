import { Button, Checkbox, Form, Input } from "antd";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { AUTH_LOGIN } from "../../Store/Action/auth";
import Home from "../Home";

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
      <Home />

      <div className="register_form">
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
            <Input name="email" onChange={handleChange} className="input" />
          </Form.Item>

          <Form.Item label="Password" name="password" className="input">
            <Input.Password
              name="password"
              onChange={handleChange}
              className="input"
            />
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
            <Link to={"/"}>Register</Link>
          </p>
        </Form>
      </div>
    </>
  );
};
export default Login;
