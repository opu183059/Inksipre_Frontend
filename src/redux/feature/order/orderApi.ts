import { baseApi } from "../../api/baseApi";

const orderApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createOrder: builder.mutation({
      query: (data) => ({
        url: "/order",
        method: "POST",
        body: data,
      }),
    }),
    verifyOrder: builder.query({
      query: (order_id) => ({
        url: "/order/verify",
        params: { order_id },
        method: "GET",
      }),
    }),
    getUserOrder: builder.query({
      query: (customerId) => ({
        url: `/order/get-order/${customerId}`,
        method: "GET",
      }),
    }),
    getAllOrders: builder.query({
      query: () => ({
        url: "/order/get-all-orders",
        method: "GET",
      }),
      providesTags: ["allOrders"],
    }),
    updateOrder: builder.mutation({
      query: (args) => ({
        url: `/order/update-order/${args.orderId}`,
        method: "PUT",
        body: args.data,
      }),
      invalidatesTags: ["allOrders"],
    }),
  }),
});

export const {
  useCreateOrderMutation,
  useVerifyOrderQuery,
  useGetUserOrderQuery,
  useGetAllOrdersQuery,
  useUpdateOrderMutation,
} = orderApi;
