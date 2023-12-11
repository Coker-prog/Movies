import React from 'react'
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom"
const Footer = () => {
  return (
    <React.Fragment>
      <div className='my-5'>
        <div id="footer_logo" className='flex justify-center '>
              <FaFacebookSquare className='pr-5 text-4xl cursor-pointer' />
              <FaInstagram  className='pr-5 text-4xl cursor-pointer'/>
              <FaTwitter className='pr-5 text-4xl cursor-pointer' />
              <FaYoutube className='pr-5 text-4xl cursor-pointer' />
          </div>
          <div id="footer_context" className='text-center py-3'>
              <Link className='pr-6' to="#">Conditions of Use</Link>
              <Link className='pr-6' to="">Privacy & Policy</Link>
              <Link className='pr-6' to="#">Press Room</Link>
          </div>
          <div id="footer" className='text-center mb-7'>
              <p>&copy; 2023 MovieBix by Coker Gbolahan Opeyemi</p>
          </div>
      </div>
    </React.Fragment>
  )
}

export default Footer