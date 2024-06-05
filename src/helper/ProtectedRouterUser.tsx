import { PropsWithChildren, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import { ToastAlerta } from "../utils/ToastAlerta";

const ProtectedRouterUser = ({ children }: PropsWithChildren) => {
  const { usuario } = useContext(AuthContext);

  const token = usuario.token;
  const navigate = useNavigate();

  useEffect(() => {
    if (token === "") {
      ToastAlerta("Você precisa estar logado", "erro");
      navigate("/login");
    }
  }, [token]);

  if (token) return children;
};

export default ProtectedRouterUser;
