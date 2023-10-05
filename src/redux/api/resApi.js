import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const reqresApi = createApi({
  reducerPath: "reqresApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://reqres.in/api/" }),
  endpoints: (builder) => ({
    getAllUsers: builder.query({
      query: () => "users",
    }),
    getNextUsers: builder.query({
      query: (pageno) => `users?page=${pageno}`,
    }),
  }),
});

export const { useGetAllUsersQuery, useGetNextUsers } = reqresApi;
