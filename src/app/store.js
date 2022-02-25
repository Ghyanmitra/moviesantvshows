import { setupListeners } from "@reduxjs/toolkit/dist/query";

import { configureStore } from "@reduxjs/toolkit";
import { moviesAndShowsApi } from "../service/MoviesAndShows";

export const store = configureStore({
  reducer: {
    [moviesAndShowsApi.reducerPath]: moviesAndShowsApi.reducer,
  },

  middleware: (getDefualtMiddleware) =>
    getDefualtMiddleware().concat(moviesAndShowsApi.middleware),
});

setupListeners(store.dispatch);
