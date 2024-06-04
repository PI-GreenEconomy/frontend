import { PropsWithChildren, useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

const ProtectedRouter = ({ children }: PropsWithChildren) => {
  const { usuario } = useContext(AuthContext);

  if (usuario.token) return children;
  else {
    return <Navigate to="/" />;
  }
};

export default ProtectedRouter;
