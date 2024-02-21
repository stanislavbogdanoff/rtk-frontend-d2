import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
  endpoints: (builder) => ({
    createProduct: builder.mutation({
      query: (body) => ({
        url: "/products",
        method: "POST",
        headers: {
          Authorization: `Bearer ${body.get("token")}`,
        },
        body: body,
      }),
    }),
  }),
});

export const { useCreateProductMutation } = productApi;
