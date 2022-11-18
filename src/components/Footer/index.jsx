import React from 'react'
import './index.css'
import {
  FacebookOutlined,
  InstagramOutlined,
  TwitterOutlined,
} from '@ant-design/icons'
import { Button } from 'antd'

const Footer = () => {
  return (
    <footer>
      <div>
        <div>
          <span>
            <img
              width={50}
              height={50}
              src="./websoham.png"
              alt="image not visible"
            />
          </span>
        </div>
        <div>
          <span className='comp'>Websoham</span>
        </div>
        <div>
          <span className='comp'>Information Technology & Services</span>
        </div>
      </div>
      <div>
        <div className="mr">
          <span className="span">
            <Button shape="circle" ghost>
              <FacebookOutlined />
            </Button>
          </span>
          <span className="span">
            <Button shape="circle" ghost>
              <InstagramOutlined />
            </Button>
          </span>
          <span className="span">
            <Button shape="circle" ghost>
              <TwitterOutlined />
            </Button>
          </span>
        </div>
        <div className="ul">
          <li className="span">
            <a href="#">Info</a>
          </li>
          <li className="span">
            <a href="#">Support</a>
          </li>
          <li className="span">
            <a href="#">Marketing</a>
          </li>
        </div>
        <div>
          <span className="span">
            <a href="#">Terms of use</a>
          </span>
          <span className="span">
            <a href="#">Private policy</a>
          </span>
        </div>
        <div className="mb">
          <span className="span">Todo app ©2022 Created by websoham</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
