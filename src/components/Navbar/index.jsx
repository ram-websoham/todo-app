import { Button } from 'antd'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { LOGOUT } from '../../Store/Action/auth'
import './index.css'

// const isUser = localStorage.getItem('persist:root')
// console.log(isUser)

// const storage = localStorage.getItem('persist:root')
// const authReducer = JSON.parse(storage)?.authReducer || null
// console.log(authReducer)

const Navbar = () => {
  let isAuthenticated = useSelector((state) => state.authReducer.data)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleLoginBtn = () => {
    navigate('/login')
  }

  const handleLogoutBtn = () => {
    dispatch({ type: LOGOUT })
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
          {isAuthenticated ? (
            <div className="logout">
              <Button onClick={handleLogoutBtn} type="danger">
                Logout
              </Button>
            </div>
          ) : (
            <div className="login">
              <Button onClick={handleLoginBtn} type="primary">
                Login
              </Button>
            </div>
          )}
        </div>
      </nav>
    </header>
  )
}

export default Navbar
