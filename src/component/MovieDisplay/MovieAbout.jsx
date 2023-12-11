import  {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { get_data, isError } from'../../features/movieSlice'
import { AiOutlineStar } from "react-icons/ai";
import { TiStarFullOutline } from "react-icons/ti";
import MovieAbout1 from './MovieAbout1';
import CircularProgress from '@mui/material/CircularProgress';

const MovieAbout = () => {
    const { id } = useParams()
    const {data, isLoading} = useSelector((state) => state.movieSlice)
    // console.log(data)
    const dispatch = useDispatch()
    const [like, setLike] =useState(false)

    const  handleClick = () =>{
        setLike((prevClick) => !prevClick)
        console.log(like)
    }
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=b2a94a788bb4a0469f5295f047a3fa3b`)
            .then((res) => {
                if(!res.ok){
                    throw new Error('could not fetch movies from server ')
                }
                return res.json()
            })
            .then((res) => {
                dispatch(get_data(res));
            })
            .catch((err) => {
                dispatch(isError(err))
            })
    },[dispatch, id]);
  return (
    <div>
        {isLoading ?  <div className=' h-[100vh flex items-center justify-center'><CircularProgress/></div> 
            :
            <section id='movie_Abouts'>
            <div id="movie_About">
                <div id="about_img" className='flex items-center justify-center py-6'>
                    <img src={`https://image.tmdb.org/t/p/w300/${data.poster_path}`} alt={data.title} />
                </div>
                <div id="data_title" className='text-3xl font-medium py-3'>
                    <h1>{data.title}</h1>
                </div>
                <div id="movie_titles">
                    <div id="movie_list" className='flex '>
                        <p> Realesed Date: {data.release_date}</p>
                        <p className='pl-8 '>PG-16</p>
                        <p className='pl-8 '>2h 10m</p>
                    </div>
                </div>
                <div className='flex justify-between'>
                    <div id="genre">
                            {data.genres && data.genres.map((genre) => (
                                <div id="genres" key={genre.id}>
                                    {genre.name}
                                </div>
                            ))}
                    </div>
                    <div id="movie_rate" className='flex items-center ml-3'>
                            {
                                like ? <AiOutlineStar onClick={handleClick} style={{fontSize: "1.7rem",paddingRight:"5px"}} />:
                                <TiStarFullOutline onClick={handleClick} style={{color: "gold", fontSize: "1.7rem",paddingRight:"5px"}} />
                            }
                            <p style={{paddingRight: "5px"}}>8.5</p>
                            <div className="line" style={{width: "1px", height: '17px', backgroundColor: "black",}}></div>
                            <p id="rates" style={{paddingLeft: "5px"}}>350k</p>
                        </div>
                    </div>
                <MovieAbout1 data={data}/>
            </div>
        </section>
        }
    </div>
  )
}

export default MovieAbout