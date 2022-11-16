import React, { useState, useEffect } from "react";
import { Input, Button, Form } from "antd";
import { useDispatch, useSelector } from "react-redux";
import TodoInput from "../../components/Input";
import { DeleteOutlined, UploadOutlined } from "@ant-design/icons";
import {
  ALL_TODO,
  DELETE_TASK,
  UPDATE_TASK,
  INPUT_CHANGE,
} from "../../Store/Action/todo";

const Dashboard = () => {
  const dispatch = useDispatch();
  const { loading, data, error } = useSelector((state) => state.todoReducer);

  useEffect(() => {
    dispatch({ type: ALL_TODO });
    //return () => {};
  }, []);

  const onTodoUpdateHandler = (value) => {
    dispatch({
      type: UPDATE_TASK,
      payload: { id: value._id, description: value.description },
    });
  };

  const onTodoDeleteHandler = (id) => {
    dispatch({
      type: DELETE_TASK,
      payload: id,
    });
  };

  const onChangeHandler = (event, index) => {
    const updatedData = data.data.map((v, i) => {
      if (index === i) {
        return {
          ...v,
          description: event.target.value,
        };
      }
      return {
        ...v,
      };
    });
    dispatch({
      type: INPUT_CHANGE,
      payload: updatedData,
    });
  };

  if (loading) {
    return null;
  }

  return (
    <>
      <div>
        <h1>Todo List</h1>
        <TodoInput />
      </div>
      <div>
        {data?.data?.map((value, index) => {
          return (
            <Form style={{ display: "flex" }} key={value._id}>
              <Input
                name="description"
                defaultValue={value.description}
                onChange={(event) => onChangeHandler(event, index)}
              />

              <Button onClick={() => onTodoUpdateHandler(value)}>
                <UploadOutlined />
              </Button>

              <Button onClick={() => onTodoDeleteHandler(value._id)}>
                <DeleteOutlined />
              </Button>
            </Form>
          );
        })}
      </div>
    </>
  );
};

export default Dashboard;