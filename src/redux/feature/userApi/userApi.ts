import { baseApi } from "../../api/baseApi";

const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    userRegistration: builder.mutation({
      query: (data) => ({
        url: "auth/register",
        method: "POST",
        body: data,
      }),
    }),
    getSingleUser: builder.query({
      query: (userId) => ({
        url: `/user/${userId}`,
        method: "GET",
      }),
    }),
    getAllUser: builder.query({
      query: () => ({
        url: "/user",
        method: "GET",
      }),
      providesTags: ["allUsers"],
    }),
    toggleBlockStatus: builder.mutation({
      query: (userId) => ({
        url: `/user/${userId}/toggle-block`,
        method: "PUT",
      }),
      invalidatesTags: ["allUsers"],
    }),
    toggleDeleteStatus: builder.mutation({
      query: (userId) => ({
        url: `/user/${userId}/toggle-delete`,
        method: "PUT",
      }),
      invalidatesTags: ["allUsers"],
    }),
  }),
});

export const {
  useUserRegistrationMutation,
  useGetSingleUserQuery,
  useGetAllUserQuery,
  useToggleBlockStatusMutation,
  useToggleDeleteStatusMutation,
} = userApi;
