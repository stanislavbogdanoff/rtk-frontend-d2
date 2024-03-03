import { configureStore } from "@reduxjs/toolkit";
import { usersApi } from "./api/usersApi";
import { authApi } from "./api/authApi";
import authReducer from "./slices/authSlice";
import { productApi } from "./api/productApi";
import { orderApi } from "./api/orderApi";

const store = configureStore({
  reducer: {
    [usersApi.reducerPath]: usersApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [productApi.reducerPath]: productApi.reducer,
    [orderApi.reducerPath]: orderApi.reducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat([
      usersApi.middleware,
      authApi.middleware,
      productApi.middleware,
      orderApi.middleware,
    ]);
  },
});

export default store;
