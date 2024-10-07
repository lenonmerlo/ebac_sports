// src/store/index.ts
import { configureStore } from '@reduxjs/toolkit'
import carrinhoReducer from './features/carrinho/carrinhoSlice'
import favoritosReducer from './features/favoritos/favoritosSlice'
import { produtosApi } from './features/produtos/produtosApi'

export const store = configureStore({
  reducer: {
    carrinho: carrinhoReducer,
    favoritos: favoritosReducer,
    [produtosApi.reducerPath]: produtosApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(produtosApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
