import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { ToastAlerta } from "../../utils/ToastAlerta";
import home from "../../assets/home/banner.jpg";

function Perfil() {
  let navigate = useNavigate();

  const { usuario } = useContext(AuthContext);

  useEffect(() => {
    if (usuario.token === "") {
      ToastAlerta("Dados Inconsistentes", "erro");
      navigate("/login");
    }
  }, [usuario.token]);

  return (
    <div className="container mt-8 overflow-hidden">
      <img
        className="h-72 w-full rounded-lg border-b-8 border-white object-cover "
        src={home}
        alt="Capa do Perfil"
      />
      <img
        src={usuario.foto}
        alt={`Foto de perfil de ${usuario.nome}`}
        className="relative z-10 mx-auto mt-[-8.8rem] w-56 rounded-full border-8 border-slate-800"
      />
      <div className="relative my-10 mt-[-6rem] flex h-72 flex-col items-center justify-center rounded-lg bg-primary text-2xl text-slate-100">
        <p>Nome: {usuario.nome} </p>
        <p>Email: {usuario.usuario}</p>
      </div>
    </div>
  );
}

export default Perfil;
