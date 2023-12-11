import React from 'react'
import { PiTelevision  } from 'react-icons/pi'
import { IoMdHome } from "react-icons/io";
import { RiMovieFill } from "react-icons/ri";
import { PiTelevisionSimpleLight } from "react-icons/pi";
import { FaRegCalendarAlt } from "react-icons/fa";
import { CiLogin } from "react-icons/ci";
import { Link } from 'react-router-dom'
import MovieAbout from './MovieAbout';
const MovieDisplay = () => {
  return (
    <React.Fragment>
      <header id='logos'>
        <div id="logo">
          <PiTelevision />
          <p >MovieBox</p>
        </div>
        <nav>
          <ul>
            <li>
            <Link to="/"> < IoMdHome className='md:text-2xl sm:text-xl'/> Home</Link>
            </li>
            <li>
              <Link to="#">< RiMovieFill  className=' md:text-2xl sm:text-xl'/> Movies</Link>
            </li>
            <li>
              <Link to="#"><PiTelevisionSimpleLight  className='md:text-2xl sm:text-xl'/> Tv Series</Link>
            </li>
            <li>
              <Link to="#"> < FaRegCalendarAlt  className='md:text-2xl sm:text-xl'/> Upcoming</Link>
            </li>
            <div id="movie_play">
              <p>Play Mmovie quizes and earn free tickets</p>
              <p>50k people are playing now</p>
              <p className='pin'>Start Playing</p>
            </div>
            <li>
              <Link to="#"> <CiLogin  className='md:text-2xl sm:text-xl'/>Log Out</Link>
            </li>
          </ul>
        </nav>
      </header>
      <MovieAbout />
    </React.Fragment>
  )
}

export default MovieDisplay