import { Button } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css';

// const isUser = localStorage.getItem('persist:root');
const token = localStorage.getItem("token");
// const { token } = isUser.authReducer.token;
// console.log(token);

const Navbar = () => {
  const navigate = useNavigate()

  const handleLoginBtn = () => {
    navigate('/login')
  }

  const handleLogoutBtn = () => {
    // localStorage.removeItem('persist:root');
    localStorage.clear();
    navigate('/')
  }

  return (
    <header>
      <nav>
        <div className="logo">
          <div>
            <h2 className="logo_item">TODO App</h2>
          </div>
        </div>
        <div className="btns">
          {!token ? (
            <div className="login">
              <Button onClick={handleLoginBtn}>Login</Button>
            </div>
          ) : (
            <div className="logout">
              <Button onClick={handleLogoutBtn}>Logout</Button>
            </div>
          )}
        </div>
      </nav>
    </header>
  )
}

export default Navbar
