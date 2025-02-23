import React from 'react'
import { Menu, Button } from 'antd';
import '../css/Menu.css'
import eco from '../images/eco.png'
import { Row, Col, Divider, Carousel } from 'antd';
import carousel1 from '../images/caro1.jpg'
import sp3 from '../images/sp3.png'
import sp5 from '../images/sp5.jpg'
import caro3 from '../images/caro3.webp'
import oceanlogo from '../images/ocean.png'
import oceanlogo2 from '../images/04.gif'

const Navbar = () => {
  const contentStyle = {
    height: '220px',
    color: '#fff',
    lineHeight: '300px',
    textAlign: 'center',
    background: '#364d74',
  };
  return (
    <>
      <div className='mainNavbar'>

        {/* Start:: Navbar */}
        <div className="bg-white shadow-md">
          <div className="flex justify-between items-center p-1">
            {/* Logo and News Tag */}
            <div className="flex items-center space-x-3">
              <img className="w-20" src={oceanlogo} alt="Logo" />
              <span className="bg-red-600 text-white px-3 py-1 rounded-lg text-sm font-bold">
                NEWS
              </span>
            </div>

            {/* Secondary Logo */}
            <div>
              <img className="w-96 h-10 rounded-lg" src={oceanlogo2} alt="Secondary Logo" />
            </div>

            {/* Live Button */}
            <Button className="font-extrabold" danger loading>
              LIVE
            </Button>
          </div>
        </div>
        {/* End:: Navbar */}

      </div>
      {/* Start:: menu */}
      <Menu mode="horizontal" className='mt-[90px] z-10 absolute rounded-xl w-[70%] ml-20 font-bold'>
        <Menu.Item>
          Home
        </Menu.Item>
        <Menu.Item>
          UK
        </Menu.Item>
        <Menu.Item>
          World
        </Menu.Item>
        <Menu.Item>
          Politics
        </Menu.Item>
        <Menu.Item>
          US
        </Menu.Item>
        <Menu.Item>
          Climate
        </Menu.Item>
        <Menu.Item>
          Science&Tech
        </Menu.Item>
        <Menu.Item>
          Business
        </Menu.Item>
        <Menu.Item>
          Ents&Arts
        </Menu.Item>
        <Menu.Item>
          Travel
        </Menu.Item>
        <Menu.Item>
          Offbeat
        </Menu.Item>
      </Menu>
      {/* END:: menu */}


      {/* Start:: Ocean news */}
      <div className='relative mt32'>
        <Carousel autoplay fade>
          <div>
            <h3 style={contentStyle}><img src={carousel1} alt="" /> </h3>
          </div>
          <div>
            <h3 style={contentStyle}><img src={sp3} alt="" /></h3>
          </div>
          <div>
            <h3 style={contentStyle}><img src={sp5} alt="" /></h3>
          </div>
          <div>
            <h3 style={contentStyle}><img src={caro3} alt="" /></h3>
          </div>
        </Carousel>
      </div>
      {/* Start:: Ocean news */}

    </>
  )
}

export default Navbar
