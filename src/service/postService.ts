import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { IPost } from 'model/IPost';

export const postAPI = createApi({
  reducerPath: 'postAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com',
  }),
  endpoints: (build) => ({
    feathAllPost: build.query<IPost[], number>({
      query: (limit = 5) => ({
        url: '/posts',
        params: {
          _limit: limit,
        },
      }),
    }),
  }),
});
