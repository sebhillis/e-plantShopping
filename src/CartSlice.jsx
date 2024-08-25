import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
      const { name, image, cost, description } = action.payload
      const existingItem = state.items.find((item) => item.name === name)
      if (!existingItem) {
        state.items.push({'name': name, 'image': image, 'cost': cost, 'description': description, 'quantity': 1})
      } else {
        existingItem.quantity++
      }
    },
    removeItem: (state, action) => {
      const { name } = action.payload
      state.items = state.items.filter((item) => item.name !== name)
    },
    updateQuantity: (state, action) => {
      const { name, newQuantity } = action.payload
      const existingItem = state.items.find((item) => item.name === name)
      if (existingItem) {
        existingItem.quantity = newQuantity
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
