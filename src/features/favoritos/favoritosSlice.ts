// src/features/favoritos/favoritosSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../App'

interface FavoritosState {
  itens: Produto[]
}

const initialState: FavoritosState = {
  itens: []
}

const favoritosSlice = createSlice({
  name: 'favoritos',
  initialState,
  reducers: {
    favoritar: (state, action: PayloadAction<Produto>) => {
      const existe = state.itens.find((item) => item.id === action.payload.id)
      if (existe) {
        state.itens = state.itens.filter(
          (item) => item.id !== action.payload.id
        )
      } else {
        state.itens.push(action.payload)
      }
    }
  }
})

export const { favoritar } = favoritosSlice.actions
export default favoritosSlice.reducer
