import { createSlice } from '@reduxjs/toolkit'


export const cartSlice = createSlice({
  name: 'cartRed',
  initialState: {
    cart: localStorage.getItem("shopping cart") ? JSON.parse( localStorage.getItem("shopping cart")) : [],
    cartTotalQuantity : 0
  },
  reducers: {
    addProduct: (state, action) => {
      
      const hasProduct = state.cart.find(p => p.id === action.payload.id) ? true : false;
      if (hasProduct) {
        state.cart.map((p) => {
          if (p.id == action.payload.id) {
            p.qty += 1
          }
        })
      } else {
        state.cart.push({ ...action.payload, qty: 1 })
        
      }
      
      localStorage.setItem("shopping cart", JSON.stringify(state.cart))


    },
    increment: (state, action) => {
      const hasProduct = state.cart.find(p => p.id === action.payload) ? true : false;

      if (hasProduct) {
        state.cart.map((p) => {
          if (p.id == action.payload) {
            p.qty += 1
          }
        })
      }
      localStorage.setItem("shopping cart", JSON.stringify(state.cart))
    },
    decrement: (state, action) => {
      const hasProduct = state.cart.find(p => p.id === action.payload) ? true : false;

      if (hasProduct) {
        state.cart.map((p) => {
          if (p.id == action.payload && p.qty > 0) {
            p.qty -= 1
          }
        })
      }
      localStorage.setItem("shopping cart", JSON.stringify(state.cart))

    },
    removeFromCart: (state, action) => {
      let nextCartItems;

      state.cart.map((p) => {
        if (p.id === action.payload.id) {
          nextCartItems = state.cart.filter(
            (item) => item.id !== p.id
          );
        }
      })
      state.cart = nextCartItems
      localStorage.setItem("shopping cart", JSON.stringify(state.cart))
    },
    getTotals(state, action) {
      let { quantity } = state.cart.reduce(
        (cartTotal, cart) => {
          const { qty } = cart;
          cartTotal.quantity += qty;

          return cartTotal;
        },
        {
          
          quantity: 0,
        }
      );
 
      state.cartTotalQuantity = quantity;
    
    },
    clearCart : (state, action) =>{
      state.cart = []
      // localStorage.setItem([])
      localStorage.clear()
    }

  },
})

// Action creators are generated for each case reducer function
export const { addProduct, increment, decrement, removeFromCart,clearCart,getTotals } = cartSlice.actions

export default cartSlice.reducer