import { baseApi } from "../../api/baseApi";

const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: (args) => ({
        url: `/products?search=${args.search}&limit=${args.limit}`,
        method: "GET",
      }),
    }),
    getSpecificProducts: builder.query({
      query: (productId) => ({
        url: `/products/${productId}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetAllProductsQuery, useGetSpecificProductsQuery } =
  productApi;
