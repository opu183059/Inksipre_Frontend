import { baseApi } from "../../api/baseApi";

const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: (args) => ({
        url: `/products?search=${args.search}&limit=${args.limit}`,
        method: "GET",
      }),
      providesTags: ["allProducts"],
    }),
    getSpecificProducts: builder.query({
      query: (productId) => ({
        url: `/products/${productId}`,
        method: "GET",
      }),
    }),
    addProduct: builder.mutation({
      query: (data) => ({
        url: "/products",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["allProducts"],
    }),
    updateProduct: builder.mutation({
      query: (args) => ({
        url: `/products/${args.productId}`,
        method: "PUT",
        body: args.data,
      }),
      invalidatesTags: ["allProducts"],
    }),
    deleteProduct: builder.mutation({
      query: (productId) => ({
        url: `/products/${productId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["allProducts"],
    }),
  }),
});

export const {
  useGetAllProductsQuery,
  useGetSpecificProductsQuery,
  useAddProductMutation,
  useUpdateProductMutation,
  useDeleteProductMutation,
} = productApi;
