/* eslint-disable @typescript-eslint/no-explicit-any */
import { ChangeEvent, useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Categoria from "../models/Categoria";
import { atualizar, buscar, cadastrar, deletar } from "../services/Service";
import { AuthContext } from "../contexts/AuthContext";
import { ToastAlerta } from "../utils/ToastAlerta";

interface UseCategoriaProps {
  buscarCategorias(): Promise<void>;
  buscarCategoriaPorId(id: string): Promise<void>;
  deletarCategoria(id: string): Promise<void>;
  atualizarEstado(e: ChangeEvent<HTMLInputElement>): void;
  gerarNovaCategoria(e: ChangeEvent<HTMLFormElement>): Promise<void>;
  categorias: Categoria[];
  categoria: Categoria;
  isLoading: boolean;
  setCategorias: React.Dispatch<React.SetStateAction<Categoria[]>>;
  setCategoria: React.Dispatch<React.SetStateAction<Categoria>>;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export const useCategoria = (): UseCategoriaProps => {
  const navigate = useNavigate();
  const [categorias, setCategorias] = useState<Categoria[]>([]);
  const [categoria, setCategoria] = useState<Categoria>({} as Categoria);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { id } = useParams<{ id: string }>();
  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  async function buscarCategorias() {
    try {
      await buscar("/categorias", setCategorias, {
        headers: { Authorization: token },
      });
    } catch (error: any) {
      if (error.toString().includes("401")) {
        // ToastAlerta("O token expirou!", "erro");
        handleLogout();
      }
    }
  }

  async function buscarCategoriaPorId(id: string) {
    try {
      await buscar(`/categorias/${id}`, setCategoria, {
        headers: {
          Authorization: token,
        },
      });
    } catch (error: any) {
      if (error.toString().includes("403")) {
        handleLogout();
      }
    }
  }

  async function deletarCategoria() {
    setIsLoading(true);

    try {
      await deletar(`/categorias/${id}`, {
        headers: {
          Authorization: token,
        },
      });

      ToastAlerta("Categoria apagada com sucesso", "sucesso");
    } catch (error: any) {
      if (error.toString().includes("403")) {
        handleLogout();
      } else {
        ToastAlerta("Erro ao deletar a categoria.", "erro");
      }
    }

    setIsLoading(false);
    navigate("/categorias");
  }

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setCategoria({
      ...categoria,
      [e.target.name]: e.target.value,
    });
  }

  async function gerarNovaCategoria(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);

    if (id !== undefined) {
      try {
        await atualizar(`/categorias`, categoria, setCategoria, {
          headers: { Authorization: token },
        });
        ToastAlerta("A categoria foi atualizado com sucesso!", "sucesso");
      } catch (error: any) {
        if (error.toString().includes("403")) {
          ToastAlerta("O Token Expirou!", "info");
          handleLogout();
        } else {
          ToastAlerta("Erro ao atualizar a categoria.", "erro");
        }
      }
    } else {
      try {
        await cadastrar(`/categorias`, categoria, setCategoria, {
          headers: { Authorization: token },
        });
        ToastAlerta("A categoria foi cadastrado com sucesso!", "sucesso");
      } catch (error: any) {
        if (error.toString().includes("403")) {
          ToastAlerta("O Token Expirou!", "info");
          handleLogout();
        } else {
          ToastAlerta("Erro ao cadastrar a categoria.", "erro");
        }
      }
    }

    setIsLoading(false);
    navigate("/categorias");
  }

  useEffect(() => {
    buscarCategorias();
  }, [categorias.length]);

  return {
    buscarCategorias,
    buscarCategoriaPorId,
    deletarCategoria,
    atualizarEstado,
    gerarNovaCategoria,
    categorias,
    categoria,
    isLoading,
    setCategorias,
    setCategoria,
    setIsLoading,
  };
};
