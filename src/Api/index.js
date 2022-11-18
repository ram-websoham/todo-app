import axios from "axios";

const getToken = () => {
  const storage = localStorage.getItem("persist:root");
  const authReducer = JSON.parse(storage)?.authReducer || null;
  if (authReducer) {
    const token = JSON.parse(authReducer)?.data?.token || "";
    return token;
  }
  return "";
};

const taskId = () => {
  const taskId = localStorage.getItem("task_id");
  return taskId;
};

const client = axios.create({
  baseURL: "https://api-nodejs-todolist.herokuapp.com/",
  headers: { Authorization: "Bearer " + getToken() },
});

export const userRegister = async (data) => {
  return client.post("/user/register", data);
};

export const userLogin = async (data) => {
  return client.post("/user/login", data);
};
export const userLogout = async () => {
  return client.post("/user/logout");
};

export const allTask = async () => {
  return client.get("/task");
};

export const addTask = async (data) => {
  return client.post("/task", data);
};

export const update = async (data) => {
  const { id, ...rest } = data;
  return client.put(`/task/${id}`, rest);
};

export const deleteTask = async (id) => {
  return client.delete("/task/" + id);
};

export const API = {
  userRegister,
  userLogin,
  userLogout,
  addTask,
  allTask,
  update,
  deleteTask,
};
