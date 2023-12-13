import React from 'react'
import { CiFaceSmile } from "react-icons/ci";
import { RxHamburgerMenu } from "react-icons/rx";
import spide from "../../assets/spide.jpeg";
import spider from "../../assets/spider.jpeg";
import torll from "../../assets/torll.jpeg"
const MovieNotifcation = () => {
  return (
    <React.Fragment>
        <div className='xl:w-[50%] lg:w-full xl:ml-5 '>
              <div id="movie_notification">
               <CiFaceSmile style={{fontSize:"22px", color:"floralwhite"}} /> 
                <p> See Showtimes</p>
              </div>
              <div id="movie_option">
              <RxHamburgerMenu /> 
              <p > More Watch Options</p>
              </div>
              <div className='relative'>
                <div id="movie_imgs" className=''>
                  <img src={spide} alt=""  className='rounded-l-2xl '/>
                  <img src={torll} alt="" className=''/>
                  <img src={spider} alt=""  className='rounded-r-2xl '/>
                </div>
                <div id='img_text'>
                    <RxHamburgerMenu />
                    <p>The Best Movies and Shows in September</p>
                </div>
              </div>
          </div>
    </React.Fragment>
  )
}

export default MovieNotifcation