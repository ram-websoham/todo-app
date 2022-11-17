import { Button } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="dis_flex">
        <div className="text_align">
          <h1>Welcome on TODO App</h1>
          <h2>
            You Neet to
            <Link to="/register"> Register </Link> /{" "}
            <Link to="/login">Login</Link>
          </h2>
          <Link to={"/dashboard"}>
            <Button type="primary" danger block>
              Dashboard
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
