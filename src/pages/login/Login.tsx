import "./Login.css";

import { Link } from "react-router-dom";

function Login() {
  return (
    <>
      <div className="my-20 grid grid-cols-1 place-items-center">
        <form
          className="flex w-1/3 flex-col justify-center gap-5 rounded-lg border border-border p-8 shadow-md"
          onSubmit={Login}
        >
          <h5 className="text-4xl font-medium text-slate-900">
            Entre na sua conta
          </h5>
          <p className="h-8">Por favor, Insira seu e-mail e senha:</p>
          <div className="flex w-full flex-col font-medium">
            <label className="mb-1" htmlFor="email">
              E-mail
            </label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="E-mail"
              className="rounded-md border-2 border-gray-300 p-2"
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
            />
          </div>
          <button
            type="submit"
            className="flex justify-center rounded-lg bg-primary py-2 text-white hover:bg-primary/90"
          >
            <span>Entrar</span>
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
