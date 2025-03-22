import {KEYS} from '#constants/KEYS';
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import { MovieDetailsType } from './movies/MovieDetailsType';
import { MovieListType } from './movies/MovieListType';

export const APIServices = createApi({
  reducerPath: 'APIServices',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.themoviedb.org/3/',
    prepareHeaders: headers => {
      headers.set('Authorization', `Bearer zz${KEYS.ACCESS_TOKEN}`);
      headers.set('Content-Type', 'application/json');
      return headers;
    },
  }),
  endpoints: builder => ({
    getMovieDetails: builder.query<MovieDetailsType, number>({
      query: (id) => `movie/${id}`,
    }),
    getMovieList: builder.query<MovieListType, string>({
      query: (type, page = 1) => `movie/${type}?page=${page}`,
    }),
  }),
});

export const {useGetMovieDetailsQuery, useGetMovieListQuery} = APIServices;
