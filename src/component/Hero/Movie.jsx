/* eslint-disable react/prop-types */
import { FaChevronRight } from "react-icons/fa6";
import MovieDetails from './MovieDetails';
import CircularProgress from '@mui/material/CircularProgress';

const Movie = ({ isLoading, datas, error }) => {
  return (
    <div className=' w-[90%] m-[auto]'>
      {
        isLoading ? <div className=' h-[100vh] flex items-center justify-center'> <CircularProgress /> </div>
      :
        <section >
            <div className='flex justify-between py-8'>
              <div id='featured' className=' md:text-4xl md:font-bold sm:text-2xl'>
                <h1>Featured Movie</h1>
              </div>
              <div id="see" className='flex items-center text-Rose md:text-xl md:font-semibold sm:text-lg sm:font-medium'>
                <p>See More</p>
                < FaChevronRight />
              </div>
            </div>
            <div id="movie_list" className='grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-x-10'>
              {datas && datas.map((data) => (
                <div id="movie_preview" key={data.id}>
                    <MovieDetails data={data} />
                </div>
              ))}
            </div>
        </section>
      } 
      {error && <div className='text-2xl text-center h-[50vh] flex flex-col justify-center'>{error}</div>}
    </div>
  )
}


export default Movie