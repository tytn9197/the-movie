import {KEYS} from '#constants/KEYS';
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import { MovieDetails } from './movies/MovieDetails';

export const APIServices = createApi({
  reducerPath: 'APIServices',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.themoviedb.org/3/',
    prepareHeaders: headers => {
      headers.set('Authorization', `Bearer ${KEYS.ACCESS_TOKEN}`);
      headers.set('Content-Type', 'application/json');
      return headers;
    },
  }),
  endpoints: builder => ({
    getMovieDetails: builder.query<MovieDetails, number>({
      query: (id) => `movie/${id}`,
    }),
  }),
});

export const {useGetMovieDetailsQuery} = APIServices;
