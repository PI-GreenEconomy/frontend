import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import UsuarioLogin from "../../models/UsuarioLogin";
import { ChangeEvent, useContext, useState, useEffect } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { RotatingLines } from "react-loader-spinner";

function Login() {
  const navigate = useNavigate();

  const { usuario, handleLogin, isLoading } = useContext(AuthContext);

  const [usuarioLogin, setUsuarioLogin] = useState<UsuarioLogin>(
    {} as UsuarioLogin,
  );

  useEffect(() => {
    if (usuario.token !== "") {
      navigate("/");
    }
  }, [usuario]);

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setUsuarioLogin({
      ...usuarioLogin,
      [e.target.name]: e.target.value,
    });
  }

  function login(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    handleLogin(usuarioLogin);
  }

  console.log(usuario);

  return (
    <>
      <div className="my-20 grid grid-cols-1 place-items-center">
        <form
          className="flex w-1/3 flex-col justify-center gap-5 rounded-lg border border-border p-8 shadow-md"
          onSubmit={login}
        >
          <h5 className="text-4xl font-medium text-slate-900">
            Entre na sua conta
          </h5>
          <p className="h-8">Por favor, Insira seu e-mail e senha:</p>
          <div className="flex w-full flex-col font-medium">
            <label className="mb-1" htmlFor="usuario">
              E-mail
            </label>
            <input
              type="text"
              id="usuario"
              name="usuario"
              placeholder="E-mail"
              className="rounded-md border-2 border-gray-300 p-2"
              value={usuarioLogin.usuario}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                atualizarEstado(e)
              }
            />
          </div>
          <div className="flex w-full flex-col font-medium">
            <label className="mb-1" htmlFor="senha">
              Senha
            </label>
            <input
              type="password"
              id="senha"
              name="senha"
              placeholder="Senha"
              className="rounded-md border-2 border-gray-300 p-2"
              value={usuarioLogin.senha}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                atualizarEstado(e)
              }
            />
          </div>
          <button
            type="submit"
            className="flex justify-center rounded-lg bg-primary py-2 text-white hover:bg-primary/90"
          >
            {isLoading ? (
              <RotatingLines
                strokeColor="white"
                strokeWidth="5"
                animationDuration="0.75"
                width="24"
                visible={true}
              />
            ) : (
              <span>Entrar</span>
            )}
          </button>

          <p>
            Cliente novo?{" "}
            <Link to="/cadastro" className="text-primary hover:underline">
              Crie uma conta
            </Link>
          </p>
        </form>
        <div className="fundoLogin hidden lg:block"></div>
      </div>
    </>
  );
}

export default Login;
