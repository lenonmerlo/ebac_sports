// src/containers/Produtos/index.tsx
import React from 'react'
import { Produto as ProdutoType } from '../App'
import Produto from '../components/Produto'

import * as S from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { adicionarAoCarrinho } from '../features/carrinho/carrinhoSlice'
import { favoritar } from '../features/favoritos/favoritosSlice'
import { RootState } from '../store'

type Props = {
  produtos: ProdutoType[]
  favoritos: ProdutoType[]
}

const ProdutosComponent = ({ produtos, favoritos }: Props) => {
  const dispatch = useDispatch()

  const adicionarAoCarrinhoHandler = (produto: ProdutoType) => {
    if (carrinho.find((p) => p.id === produto.id)) {
      alert('Item já adicionado')
    } else {
      dispatch(adicionarAoCarrinho(produto))
    }
  }

  const favoritarHandler = (produto: ProdutoType) => {
    dispatch(favoritar(produto))
  }

  const carrinho = useSelector((state: RootState) => state.carrinho.itens)

  const produtoEstaNosFavoritos = (produto: ProdutoType) => {
    return favoritos.some((f) => f.id === produto.id)
  }

  return (
    <>
      <S.Produtos>
        {produtos.map((produto) => (
          <Produto
            estaNosFavoritos={produtoEstaNosFavoritos(produto)}
            key={produto.id}
            produto={produto}
            favoritar={favoritarHandler}
            aoComprar={adicionarAoCarrinhoHandler}
          />
        ))}
      </S.Produtos>
    </>
  )
}

export default ProdutosComponent
