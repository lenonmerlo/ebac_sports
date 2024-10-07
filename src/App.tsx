// src/App.tsx
import Header from './components/Header'
import Produtos from './containers/Produtos'

import { GlobalStyle } from './styles'
import { useGetProdutosQuery } from './features/produtos/produtosApi'
import { useSelector } from 'react-redux'
import { RootState } from './store'

// src/App.tsx
export type Produto = {
  id: number
  nome: string
  preco: number
  imagem: string
}

function App() {
  const { data: produtos = [], error, isLoading } = useGetProdutosQuery()
  const carrinho = useSelector((state: RootState) => state.carrinho.itens)
  const favoritos = useSelector((state: RootState) => state.favoritos.itens)

  return (
    <>
      <GlobalStyle />
      <div className="container">
        <Header />
        {isLoading && <p>Carregando produtos...</p>}
        {error && <p>Erro ao carregar produtos.</p>}
        {!isLoading && !error && (
          <Produtos produtos={produtos} favoritos={favoritos} />
        )}
      </div>
    </>
  )
}

export default App
