import { configureStore } from "@reduxjs/toolkit";
import { usersApi } from "./api/usersApi";

const store = configureStore({
  reducer: {
    [usersApi.reducerPath]: usersApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat([usersApi.middleware]);
  },
});

export default store;
