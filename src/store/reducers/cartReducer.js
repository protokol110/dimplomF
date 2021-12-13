import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    itemsInCart: JSON.parse(localStorage.getItem('ID')) || [],
    itemsInFav: JSON.parse(localStorage.getItem('Fav')) || [],
  },
  reducers: {
    setItemInCart: (state, action) => {
      state.itemsInCart.push({...action.payload, quantity: 1});
      localStorage.setItem('ID', JSON.stringify(state.itemsInCart))
    },

    deleteItemFromCart: (state, action) => {
      state.itemsInCart = state.itemsInCart.filter(item => item.id !== action.payload);
      localStorage.setItem('ID', JSON.stringify(state.itemsInCart.filter(item => item.id !== action.payload)));
    },

    increaseCount: (state, action) => {
      state.itemsInCart = state.itemsInCart.map(item => {
        if(item.id === action.payload) {
          item.quantity += 1;
        }
        return item;
      })
      localStorage.setItem('ID', JSON.stringify(state.itemsInCart));
    },

    decreaseCount: (state, action) => {
      state.itemsInCart = state.itemsInCart.map(item => {
        if(item.id === action.payload && item.quantity > 1) {
          item.quantity -= 1;
        }
        return item;
      })
    },

    proceedToCheckOut: (state, action) => {
        localStorage.removeItem('ID');
        state.itemsInCart = [];
    },

    setItemInFav: (state, action) => {
      state.itemsInFav.push(action.payload);
      localStorage.setItem('Fav', JSON.stringify(state.itemsInFav))
    },

    deleteItemFromFav: (state, action) => {
      state.itemsInFav = state.itemsInFav.filter(item => item.id !== action.payload);
      localStorage.setItem('Fav', JSON.stringify(state.itemsInFav.filter(item => item.id !== action.payload)));
  }

}});

export const { setItemInCart, deleteItemFromCart, increaseCount, decreaseCount, proceedToCheckOut, setItemInFav, deleteItemFromFav } = cartSlice.actions;
export default cartSlice.reducer;



















