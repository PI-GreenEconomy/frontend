import { PropsWithChildren, useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

const ProtectedRouterAdmin = ({ children }: PropsWithChildren) => {
  const { usuario } = useContext(AuthContext);

  const usuarioAdmin =
    usuario.funcao === "ADMIN" || usuario.funcao === "VENDEDOR";

  if (usuarioAdmin) return children;
  else {
    return <Navigate to="/" />;
  }
};

export default ProtectedRouterAdmin;
