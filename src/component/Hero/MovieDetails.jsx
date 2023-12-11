import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { FcRating } from "react-icons/fc";
import { AiFillPlayCircle } from "react-icons/ai"
import { FcLike } from "react-icons/fc";
import { IoIosHeartEmpty } from "react-icons/io";
import { Link } from 'react-router-dom';

const MovieDetails = ({data}) => {
    const [likes, setLikes] = useState(false)
    const handleClick = () => {
        setLikes((prevclick) => !prevclick)
    }
  return (
    <React.Fragment>
        <section id="movie_details" className='mb-9' >
            <div id="movie_img" className='relative' >
                <img className='w-full' src={`https://image.tmdb.org/t/p/w300/${data.poster_path}`} alt={data.title} />
                { likes ?  <FcLike className='absolute top-3 right-5 text-4xl'
                onClick={handleClick} 
                /> :
                   < IoIosHeartEmpty  
                   className='absolute top-3 right-5 text-4xl'
                   onClick={handleClick} 
                   />
                 }
            </div>
            <Link to={`/moviedisplay/${data.id}`}>
            <div id="movie-date">
                <p className='font-thin text-xm'>{data.release_date}</p>
            </div>
            <div id="movie-title" className='font-medium text-lg py-2'>
                <h1 >{data.title}</h1>
            </div>
            <div id="movie_rate" className='flex items-center justify-between font-light text-base'>
                <p className='flex items-center'> <AiFillPlayCircle  /> 86.0/100</p>
                 <p className='flex items-center'> <FcRating/>97%</p>
            </div>
            </Link>
        </section>
    </React.Fragment>
  )
}
MovieDetails.propTypes ={
    data: PropTypes.object.isRequired
}
export default MovieDetails