import { RootState } from '#redux/store'
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

// Define the TS type for the counter slice's state
export interface IHomeState {
  movieType: 'now_playing' | 'popular' | 'upcoming'
  sortBy: 'alphabetical_order' | 'rating' | 'release_date' | null
}

// Define the initial value for the slice state
const initialState: IHomeState = {
  movieType: 'now_playing',
  sortBy: null,
}

export const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    setMovieType: (state, action: PayloadAction<IHomeState['movieType']>) => {
      state.movieType = action.payload;
    },
    setSortBy: (state, action: PayloadAction<IHomeState['sortBy']>) => {
      state.sortBy = action.payload;
    },
  },
})

// Action creators are generated for each case reducer function
export const { setMovieType, setSortBy } = homeSlice.actions

export default homeSlice

export const getMovieTypeName = (state: RootState) : string => {
    switch (state.home.movieType) {
        case 'now_playing':
            return 'Now Playing';
        case 'popular':
            return 'Popular';
        case 'upcoming':
            return 'Upcoming';
    }
}