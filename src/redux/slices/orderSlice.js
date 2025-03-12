import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  orders: [{ id: 1, name: "", products: [] }],
  selectedOrderId: 1,
};

const orderSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    createNewOrder: (state) => {
      const newOrderId = state.orders.length + 1;
      const newOrder = { id: newOrderId, name: "", products: [] };
      state.orders.push(newOrder);
      state.selectedOrderId = newOrderId;
    },
    selectOrderId: (state, action) => {
      console.log(action.payload);

      state.selectedOrderId = action.payload;
    },
    addProduct: (state, action) => {
      const selectedOrder = state.orders.find(
        (order) => order.id === state.selectedOrderId
      );
      if (selectedOrder) {
        const existingProduct = selectedOrder.products.find(
          (p) => p.id === action.payload.id
        );
        if (existingProduct) {
          existingProduct.quantity += 1;
        } else {
          selectedOrder.products.push({ ...action.payload, quantity: 1 });
        }
      }
    },
    removeProduct: (state, action) => {
      const selectedOrder = state.orders.find(
        (order) => order.id === state.selectedOrderId
      );
      if (selectedOrder) {
        selectedOrder.products = selectedOrder.products
          .map((p) =>
            p.id === action.payload ? { ...p, quantity: p.quantity - 1 } : p
          )
          .filter((p) => p.quantity > 0);
      }
    },
    deleteOrder: (state, action) => {
      state.orders = state.orders.filter(
        (order) => order.id !== action.payload
      );
      state.selectedOrderId = state.orders[state.orders.length - 1].id;
    },
    addNameOrder: (state, action) => {
      const selectedOrder = state.orders.find(
        (order) => order.id === state.selectedOrderId
      );
      selectedOrder.name = action.payload;
    },
  },
});

export const {
  createNewOrder,
  addProduct,
  removeProduct,
  selectOrderId,
  deleteOrder,
  addNameOrder,
} = orderSlice.actions;
export default orderSlice.reducer;
