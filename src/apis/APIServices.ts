import {KEYS} from '#constants/KEYS';
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import { MovieDetailsType } from './movies/MovieDetailsType';
import { MovieListType } from './movies/MovieListType';
import { MovieCreditsType } from './movies/MovieCreditsType';

type MovieListQueryArgs = {
  type: string;
  page: number;
}

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
  keepUnusedDataFor: 30,
  endpoints: builder => ({
    getMovieDetails: builder.query<MovieDetailsType, number>({
      query: (id) => `movie/${id}`,
    }),
    getMovieCredits: builder.query<MovieCreditsType, number>({
      query: (id) => `movie/${id}/credits`,
    }),
    getMovieList: builder.query<MovieListType, MovieListQueryArgs>({
      query: ({type, page = 1}) => `movie/${type}?page=${page}`,
      serializeQueryArgs: ({ }) => {
        return true
      },
      merge: (currentCache, newData, { arg }) => {
        if (arg.page === 1) {
          return newData; 
        }

        return {
          ...newData,
          results: [...currentCache.results, ...newData.results],
        };
      },
      // Refetch when the page arg changes
      forceRefetch({ currentArg, previousArg }) {
        return currentArg?.type !== previousArg?.type || currentArg?.page !== previousArg?.page
      },
    }),
    getMoviesSearch: builder.query<MovieListType, {query: string, page: number}>({
      query: ({query, page = 1}) => `search/movie?query=${query}&page=${page}`,
      serializeQueryArgs: ({ }) => {
        return true
      },
      merge: (currentCache, newData, { arg }) => {
        if (arg.page === 1) {
          return newData; 
        }

        return {
          ...newData,
          results: [...currentCache.results, ...newData.results],
        };
      },
      forceRefetch({ currentArg, previousArg }) {
        return currentArg?.query !== previousArg?.query || currentArg?.page !== previousArg?.page
      },
    }),
  }),
});

export const {useGetMovieDetailsQuery, useGetMovieListQuery, useGetMovieCreditsQuery, useLazyGetMoviesSearchQuery} = APIServices;
