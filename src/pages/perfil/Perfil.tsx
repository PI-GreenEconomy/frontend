import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { ToastAlerta } from "../../utils/ToastAlerta";
import home from "../../assets/home/banner.jpg";
import { GithubLogo, InstagramLogo, LinkedinLogo } from "@phosphor-icons/react";

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
        className=" h-80 w-full rounded-lg object-cover "
        src={home}
        alt="Capa do Perfil"
      />
      <img
        src={usuario.foto}
        alt={`Foto de perfil de ${usuario.nome}`}
        className="relative z-10 mx-auto mt-[-8.8rem] w-56 rounded-full border-8 border-slate-800"
      />
      <div className="border-red relative my-10 mt-[-6rem] flex h-80 flex-col items-center justify-center rounded-lg bg-primary text-2xl text-slate-100">
        <p className="mt-14">Nome: {usuario.nome} </p>
        <p>Email: {usuario.usuario}</p>

        <div className="mt-5 inline-flex gap-2">
          <a href="" target="_blank">
            <GithubLogo size={48} weight="bold" />
          </a>
          <a href="" target="_blank">
            <LinkedinLogo size={48} weight="bold" />
          </a>
          <a href="" target="_blank">
            <InstagramLogo size={48} weight="bold" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Perfil;
