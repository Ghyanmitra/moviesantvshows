import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_KEY } from "../app/constant";

export const moviesAndShowsApi = createApi({
  reducerPath: "moviesAndShows",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.themoviedb.org/3/",
  }),
  endpoints: (builder) => ({
    getMoviesAndTVShows: builder.mutation({
      query: ({ type, category, pageNo }) => {
        console.log(
          `${type}/${category}/?api_key=${API_KEY}&language=en-US&page=${pageNo}`
        );
        return {
          url: `${type}/${category}/?api_key=${API_KEY}&language=en-US&page=${pageNo}`,
          method: "GET",
        };
      },
    }),

    // getTVShows: builder.query({
    //   query: (category, pageNo) => {
    //     return {
    //       url: `tv/${category}/?api_key=${API_KEY}&language=en-US&page=${pageNo}`,
    //       method: "GET",
    //     };
    //   },
    // }),
  }),
});

export const { useGetMoviesAndTVShowsMutation } = moviesAndShowsApi;
