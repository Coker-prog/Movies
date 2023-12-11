import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  datas: [],
  data: {},
  isLoading: true,
  error: "",
  search: {}
}

export const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
   get_datas: function(state, action) {
    // console.log(action.payload)
    return {
      ...state,
      datas: action.payload,
      isLoading: false,
      error: false
    }
   },
   isError: function(state, action) {
    // console.log(action.payload)
    return{
      ...state,
      error: action.payload,
      isLoading: false
    } 
   },
   get_data: function(state, action) {
    return {
      ...state,
      data: action.payload,
      isLoading: false,
      error:false
    }
   }
  },
})

export const {get_datas, isError, get_data} = movieSlice.actions
export default movieSlice.reducer