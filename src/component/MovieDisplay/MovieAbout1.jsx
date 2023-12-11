import React from 'react'
import PropTypes from 'prop-types'
import MovieNotifcation from './MovieNotifcation'


const MovieAbout1 = ({data}) => {
  return (
    <React.Fragment>
        <section className='xl:flex'>
          <div className='w-[100%]'>
              <div id="data_about">
                  <p>{data.overview}</p>
              </div>
              <div id="data_select">
                  <div id="movie_select">
                    <p>Top rated movie #65</p>
                  </div>
                  <div id="select">
                      <select>
                        <option value="Awards 9 nomination">Awards 9 nomination</option>
                        <option value="Awards 8 nomination">Awards 8 nomination</option>
                        <option value="Awards 7 nomination">Awards 7 nomination</option>
                        <option value="Awards 6 nomination">Awards 6 nomination</option>
                        <option value="Awards 5 nomination">Awards 5 nomination</option>
                        <option value="Awards 4 nomination">Awards 4 nomination</option>
                        <option value="Awards 3 nomination">Awards 3 nomination</option>
                        <option value="Awards 2 nomination">Awards 2 nomination</option>
                        <option value="Awards 1 nomination">Awards 1 nomination</option>
                      </select>
                  </div>
              </div>
          </div>
          <MovieNotifcation />
        </section>
    </React.Fragment>
  )
}
MovieAbout1.propTypes = {
  data: PropTypes.object.isRequired
}
export default MovieAbout1