// src/api.ts
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Produto } from './App'

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/'
  }),
  endpoints: (builder) => ({
    fetchProdutos: builder.query<Produto[], void>({
      query: () => 'ebac_sports'
    })
  })
})

// Exportar hooks gerados pelo Redux Toolkit Query
export const { useFetchProdutosQuery } = api
