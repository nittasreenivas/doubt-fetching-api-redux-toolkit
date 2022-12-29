import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk(
  "fetchProducts/Products",
  async () => {
    const response = await fetch("https://dummyjson.com/products?limit=100");
    return response.json();
  }
);
//const url = "https://dummyjson.com/products"
export const fetchSingleProduct = createAsyncThunk(
  "fetchSingleProduct/Products",
  async ({ id }) => {
    const response = await fetch(
      `https://dummyjson.com/products${id}?limit=100`
    );
    return response.json();
  }
);

export const productSlice = createSlice({
  name: "Products",
  initialState: {
    Products: [],
    loading: false,
    Product: []
  },
  extraReducers: {
    [fetchProducts.pending]: (state, action) => {
      state.loading = true;
    },
    [fetchProducts.fulfilled]: (state, action) => {
      state.loading = false;
      state.Products = action.payload.products;
    },
    [fetchProducts.rejected]: (state, action) => {
      state.loading = false;
    },
    [fetchSingleProduct.pending]: (state, action) => {
      state.loading = true;
    },
    [fetchSingleProduct.fulfilled]: (state, action) => {
      state.loading = false;
      state.Product = action.payload.products;
    },
    [fetchSingleProduct.rejected]: (state, action) => {
      state.loading = false;
    }
  }
});

export default productSlice.reducer;

//https://dummyjson.com/products/1?limit=100
