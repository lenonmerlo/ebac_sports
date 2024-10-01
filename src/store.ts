// src/store.ts
import { configureStore } from '@reduxjs/toolkit'
import carrinhoReducer from './carrinhoSlice'

const store = configureStore({
  reducer: {
    carrinho: carrinhoReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
