import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const usersApi = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => ({
        url: "/users",
      }),
      providesTags: ["Users"],
    }),
    deleteUser: builder.mutation({
      query: (userId) => ({
        url: `/users/${userId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Users"],
    }),
    // updateUser: builder.mutation({
    //   query: ({ userId, userData }) => ({
    //     url: `/user/${userId}`,
    //     body: userData
    //   })
    // })
  }),
  tagTypes: ["Users"],
});

export const {
  // GET /users
  useGetUsersQuery,
  useLazyGetUsersQuery,
  // DELETE /users/:userId
  useDeleteUserMutation,
} = usersApi;
