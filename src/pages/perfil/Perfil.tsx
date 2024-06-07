import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { ToastAlerta } from "../../utils/ToastAlerta";
import home from "../../assets/home/banner.jpg";

function Perfil() {
  const navigate = useNavigate();

  const { usuario } = useContext(AuthContext);
  const fotoUsuario =
    usuario.foto ||
    "https://ik.imagekit.io/GreenEconomy/Avatar/avatar.webp?updatedAt=1717589660869";

  useEffect(() => {
    if (usuario.token === "") {
      ToastAlerta("Dados Inconsistentes", "erro");
      navigate("/login");
    }
  }, [usuario.token]);

  return (
    <div className="overflow-hidden bg-primary">
      <img
        className=" h-full max-h-64 w-full object-cover "
        src={home}
        alt="Capa do Perfil"
      />
      <img
        src={fotoUsuario}
        alt={`Foto de perfil de ${usuario.nome}`}
        className="relative z-10 mx-auto mt-[-8.8rem] w-56 rounded-full border-8 border-slate-800"
      />
      <div className="border-red relative mt-[-6rem] flex h-full flex-col items-center justify-center py-20 text-2xl text-slate-100">
        <div className="mt-5">
          <div className="flex flex-col items-start gap-1">
            <p className="mt-4">
              Nome:
              <span className="ml-1 font-medium capitalize">
                {usuario.nome}
              </span>
            </p>
            <p>
              Email: <span className="ml-1 font-medium">{usuario.usuario}</span>
            </p>
            {usuario.funcao === "ADMIN" ||
              (usuario.funcao === "VENDEDOR" && (
                <p>
                  Função:{" "}
                  <span className="ml-1 font-medium lowercase">
                    {usuario.funcao}
                  </span>
                </p>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Perfil;
