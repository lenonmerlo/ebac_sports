// src/features/produtos/produtosSlice.ts
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export type Produto = {
  id: number
  nome: string
  preco: number
  imagem: string
}

interface ProdutosState {
  produtos: Produto[]
  loading: boolean
  error: string | null
}

const initialState: ProdutosState = {
  produtos: [],
  loading: false,
  error: null
}

// Thunk para buscar produtos da API
export const fetchProdutos = createAsyncThunk(
  'produtos/fetchProdutos',
  async () => {
    const response = await fetch(
      'https://fake-api-tau.vercel.app/api/ebac_sports'
    )
    return response.json()
  }
)

const produtosSlice = createSlice({
  name: 'produtos',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProdutos.pending, (state) => {
        state.loading = true
      })
      .addCase(fetchProdutos.fulfilled, (state, action) => {
        state.loading = false
        state.produtos = action.payload
      })
      .addCase(fetchProdutos.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message || 'Erro ao buscar produtos'
      })
  }
})

// Seletores
export const selectProdutos = (state: { produtos: ProdutosState }) =>
  state.produtos.produtos
export const selectLoading = (state: { produtos: ProdutosState }) =>
  state.produtos
