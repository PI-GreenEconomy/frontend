import { createContext, ReactNode } from "react";
import Produto from "../models/Produto";
import { calcularValorTotalProduto } from "../utils/preco";
import useLocalStorage from "../hooks/useLocalStorage";

export interface CartProduto extends Produto {
  quantidade: number;
}

interface ICartContext {
  produtos: CartProduto[];
  subtotal: number;
  precoTotal: number;
  totalDescontos: number;
  quantidadeItems: number;
  adicionarProdutoAoCarrinho: ({
    produto,
    carrinhoVazio,
  }: {
    produto: CartProduto;
    carrinhoVazio?: boolean;
  }) => void;
  aumentarQuantidadeProduto: (produtoId: number) => void;
  diminuirQuantidadeProduto: (produtoId: number) => void;
  removerProdutoDoCarrinho: (produtoId: number) => void;
  limparCarrinho: () => void;
}

export const CartContext = createContext<ICartContext>({
  produtos: [],
  subtotal: 0,
  precoTotal: 0,
  totalDescontos: 0,
  quantidadeItems: 0,
  adicionarProdutoAoCarrinho: () => {},
  aumentarQuantidadeProduto: () => {},
  diminuirQuantidadeProduto: () => {},
  removerProdutoDoCarrinho: () => {},
  limparCarrinho: () => {},
});

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [produtos, setProdutos] = useLocalStorage<CartProduto[]>(
    "productsCart",
    [],
  );

  const subtotal = produtos.reduce((acc, produto) => {
    return acc + Number(produto.basePreco) * produto.quantidade;
  }, 0);

  const precoTotal = produtos.reduce((acc, produto) => {
    return acc + calcularValorTotalProduto(produto) * produto.quantidade;
  }, 0);

  const quantidadeItems = produtos.reduce((acc, produto) => {
    return acc + produto.quantidade;
  }, 0);

  const totalDescontos = subtotal - precoTotal;

  const limparCarrinho = () => {
    return setProdutos([]);
  };
  const diminuirQuantidadeProduto: ICartContext["diminuirQuantidadeProduto"] = (
    produtoId: number,
  ) => {
    return setProdutos((prev) =>
      prev.map((cartProduto) => {
        if (cartProduto.id === produtoId) {
          if (cartProduto.quantidade === 1) {
            return cartProduto;
          }

          return {
            ...cartProduto,
            quantidade: cartProduto.quantidade - 1,
          };
        }

        return cartProduto;
      }),
    );
  };

  const aumentarQuantidadeProduto: ICartContext["aumentarQuantidadeProduto"] = (
    produtoId: number,
  ) => {
    return setProdutos((prev) =>
      prev.map((cartProduto) => {
        if (cartProduto.id === produtoId) {
          return {
            ...cartProduto,
            quantidade: cartProduto.quantidade + 1,
          };
        }

        return cartProduto;
      }),
    );
  };

  const removerProdutoDoCarrinho: ICartContext["removerProdutoDoCarrinho"] = (
    produtoId: number,
  ) => {
    return setProdutos((prev) =>
      prev.filter((produto) => produto.id !== produtoId),
    );
  };

  const adicionarProdutoAoCarrinho: ICartContext["adicionarProdutoAoCarrinho"] =
    ({ produto, carrinhoVazio }) => {
      if (carrinhoVazio) {
        setProdutos([]);
      }

      const produtoJaExisteNoCarrinho = produtos.some(
        (cartProduto) => cartProduto.id === produto.id,
      );

      if (produtoJaExisteNoCarrinho) {
        return setProdutos((prev) =>
          prev.map((cartProduct) => {
            if (cartProduct.id === produto.id) {
              return {
                ...cartProduct,
                quantidade: cartProduct.quantidade + produto.quantidade,
              };
            }
            return cartProduct;
          }),
        );
      }

      setProdutos((prev) => [...prev, produto]);
    };

  return (
    <CartContext.Provider
      value={{
        produtos,
        subtotal,
        precoTotal,
        totalDescontos,
        quantidadeItems,
        limparCarrinho,
        adicionarProdutoAoCarrinho,
        diminuirQuantidadeProduto,
        aumentarQuantidadeProduto,
        removerProdutoDoCarrinho,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
