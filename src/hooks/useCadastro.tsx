// useCadastro.ts
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Usuario from "../models/Usuario";
import { cadastrarUsuario } from "../services/Service";

export function useCadastro() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [usuario, setUsuario] = useState<Usuario>({
    id: 0,
    nome: "",
    usuario: "",
    senha: "",
    foto: "",
  });

  const navigate = useNavigate();

  async function cadastrarNovoUsuario(usuarioValues: Usuario) {
    setIsLoading(true);
    try {
      const { confirmarSenha, ...usuario } = usuarioValues;
      await cadastrarUsuario(`/usuarios/cadastrar`, usuario, setUsuario);
      alert("Usuário cadastrado com sucesso!");
    } catch (error) {
      alert("Erro ao cadastrar o usuário!");
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    if (usuario.id !== 0) {
      navigate("/login");
    }
  }, [usuario]);

  return { isLoading, cadastrarNovoUsuario };
}
