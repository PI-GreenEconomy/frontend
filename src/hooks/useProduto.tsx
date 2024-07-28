/* eslint-disable @typescript-eslint/no-explicit-any */
import { ChangeEvent, useContext, useEffect, useState } from "react";
import Categoria from "../models/Categoria";
import Produto from "../models/Produto";
import { useNavigate, useParams } from "react-router-dom";
import { atualizar, buscar, cadastrar, deletar } from "../services/Service";
import { AuthContext } from "../contexts/AuthContext";
import { ToastAlerta } from "../utils/ToastAlerta";

interface UseProdutoProps {
  buscarProdutoPorId(id: string): Promise<void>;
  deletarProduto(id: string): Promise<void>;
  buscarProdutos(): Promise<void>;
  atualizarEstado: (
    e: ChangeEvent<HTMLInputElement>,
    categoria: Categoria,
  ) => void;
  gerarNovoProduto(
    e: ChangeEvent<HTMLFormElement>,
    produtoAtualizado: Produto,
  ): Promise<void>;
  produtos: Produto[];
  produto: Produto;
  isLoading: boolean;
  setProdutos: React.Dispatch<React.SetStateAction<Produto[]>>;
  setProduto: React.Dispatch<React.SetStateAction<Produto>>;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export const useProduto = (): UseProdutoProps => {
  const navigate = useNavigate();
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [produto, setProduto] = useState<Produto>({} as Produto);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { id } = useParams<{ id: string }>();
  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  async function buscarProdutoPorId(id: string) {
    try {
      await buscar(`/produtos/${id}`, setProduto, {
        headers: { Authorization: token },
      });
    } catch (error: any) {
      if (error.toString().includes("403")) {
        handleLogout();
      }
    }
  }

  async function deletarProduto(id: string) {
    setIsLoading(true);

    try {
      await deletar(`/produtos/${id}`, {
        headers: { Authorization: token },
      });

      ToastAlerta("Produto apagado com sucesso", "sucesso");
    } catch (error: any) {
      ToastAlerta("Erro ao deletar o produto.", "erro");
      handleLogout();
    }

    setIsLoading(false);
    navigate("/seusprodutos");
  }

  async function buscarProdutos() {
    try {
      await buscar("/produtos", setProdutos, {
        headers: { Authorization: token },
      });
    } catch (error: any) {
      if (error.toString().includes("403")) {
        handleLogout();
      }
    }
  }

  async function gerarNovoProduto(
    e: ChangeEvent<HTMLFormElement>,
    produtoAtualizado: Produto,
  ) {
    e.preventDefault();
    setIsLoading(true);

    if (id !== undefined) {
      try {
        await atualizar(`/produtos`, produtoAtualizado, setProduto, {
          headers: { Authorization: token },
        });

        ToastAlerta("Produto atualizado com sucesso", "sucesso");
      } catch (error: any) {
        if (error.toString().includes("403")) {
          navigate("/");
        } else {
          ToastAlerta("Erro ao atualizar o Produto", "erro");
        }
      }
    } else {
      try {
        await cadastrar(`/produtos`, produtoAtualizado, setProduto, {
          headers: { Authorization: token },
        });
        ToastAlerta("Produto cadastrado com sucesso", "sucesso");
      } catch (error: any) {
        if (error.toString().includes("403")) {
          navigate("/");
        } else {
          ToastAlerta("Erro ao cadastrar o Produto:", "erro");
        }
      }
    }

    setIsLoading(false);
    navigate("/seusprodutos");
  }
  const atualizarEstado = (
    e: ChangeEvent<HTMLInputElement>,
    categoria: Categoria,
  ) => {
    setProduto({
      ...produto,
      [e.target.name]: e.target.value,
      categoria: categoria,
      usuario: usuario,
    });
  };

  useEffect(() => {
    buscarProdutos();
  }, [produtos.length]);

  return {
    atualizarEstado,
    buscarProdutoPorId,
    buscarProdutos,
    deletarProduto,
    gerarNovoProduto,
    isLoading,
    produto,
    produtos,
    setIsLoading,
    setProduto,
    setProdutos,
  };
};
