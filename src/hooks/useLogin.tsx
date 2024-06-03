import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import UsuarioLogin from "../models/UsuarioLogin";

export function useLogin() {
  const navigate = useNavigate();

  const { usuario, handleLogin, isLoading } = useContext(AuthContext);

  function login(usuarioValues: UsuarioLogin) {
    handleLogin(usuarioValues);
  }

  useEffect(() => {
    if (usuario.token !== "") {
      navigate("/");
    }
  }, [usuario]);

  return { login, isLoading };
}
