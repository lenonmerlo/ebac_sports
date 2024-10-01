// src/App.tsx
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Header from './components/Header'
import Produtos from './containers/Produtos'
import { GlobalStyle } from './styles'
import { adicionarAoCarrinho } from './carrinhoSlice'
import { useFetchProdutosQuery } from './api' // Importar hook da API
import { RootState } from '@reduxjs/toolkit/dist/query/react'

// src/App.tsx
export type Produto = {
  id: number
  nome: string
  preco: number
  imagem: string
  // outras propriedades
}

function App() {
  const dispatch = useDispatch()
  const { data: produtos = [], error } = useFetchProdutosQuery() // Usar o hook

  const carrinho = useSelector((state: RootState) => state.carrinho.itens)
  const favoritos = useSelector((state: RootState) => state.favoritos) // Defina o slice de favoritos se necessário

  const handleAdicionarAoCarrinho = (produto: Produto) => {
    dispatch(adicionarAoCarrinho(produto))
  }

  const handleFavoritar = (produto: Produto) => {
    // Lógica para favoritar (caso tenha um slice para favoritos)
  }

  if (error) {
    return <div>Error loading products</div> // Tratamento de erro
  }

  return (
    <>
      <GlobalStyle />
      <div className="container">
        <Header favoritos={favoritos} itensNoCarrinho={carrinho} />
        <Produtos
          produtos={produtos}
          favoritos={favoritos}
          favoritar={handleFavoritar}
          adicionarAoCarrinho={handleAdicionarAoCarrinho}
        />
      </div>
    </>
  )
}

export default App
