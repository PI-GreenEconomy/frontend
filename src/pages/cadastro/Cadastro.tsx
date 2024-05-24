import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { cadastrarUsuario } from "../../services/Service";
import Usuario from "../../models/Usuario";
import { RotatingLines } from "react-loader-spinner";

function Cadastro() {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [confirmaSenha, setConfirmaSenha] = useState<string>("");

  const [usuario, setUsuario] = useState<Usuario>({
    id: 0,
    nome: "",
    usuario: "",
    senha: "",
    foto: "",
  });

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });
  }

  useEffect(() => {
    if (usuario.id !== 0) {
      retornar();
    }
  }, [usuario]);

  function retornar() {
    navigate("/login");
  }

  function handleConfirmarSenha(e: ChangeEvent<HTMLInputElement>) {
    setConfirmaSenha(e.target.value);
  }

  async function cadastrarNovoUsuario(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (confirmaSenha === usuario.senha && usuario.senha.length >= 8) {
      setIsLoading(true);

      try {
        await cadastrarUsuario(`/usuarios/cadastrar`, usuario, setUsuario);
        alert("Usuário cadastrado com sucesso!");
      } catch (error) {
        alert("Erro ao cadastrar o usuário!");
      }
    } else {
      alert("Dados estão inconsistentes. Verifique as informações do cadastro");
      setUsuario({ ...usuario, senha: "" });
      setConfirmaSenha("");
    }

    setIsLoading(false);
  }

  return (
    <>
      <div
        className=" mx-auto my-20 flex h-screen place-items-center justify-center 
            font-poppins font-medium"
      >
        <div className="fundoCadastro hidden lg:block"></div>

        <form
          className="flex w-full max-w-[420px] flex-col justify-center gap-6 rounded-lg border border-border p-8 shadow-md"
          onSubmit={cadastrarNovoUsuario}
        >
          <h2 className=" text-left text-2xl font-bold">Crie sua conta</h2>
          <div className="flex w-full flex-col gap-2">
            <label htmlFor="nome">Nome</label>
            <input
              type="text"
              id="nome"
              name="nome"
              placeholder="Seu nome"
              className="rounded border-2 p-2 outline-none focus:border-primary "
              value={usuario.nome}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                atualizarEstado(e)
              }
              required
            />
          </div>
          <div className="flex w-full flex-col gap-2">
            <label htmlFor="usuario">E-mail</label>
            <input
              type="text"
              id="usuario"
              name="usuario"
              placeholder="email@email.com"
              className="rounded border-2 p-2 outline-none focus:border-primary"
              value={usuario.usuario}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                atualizarEstado(e)
              }
              required
            />
          </div>
          <div className="flex w-full flex-col gap-2">
            <label htmlFor="foto">Foto</label>
            <input
              type="text"
              id="foto"
              name="foto"
              placeholder="URL da foto"
              className="rounded border-2 p-2 outline-none focus:border-primary"
              value={usuario.foto}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                atualizarEstado(e)
              }
            />
          </div>
          <div className="flex w-full flex-col gap-2">
            <label htmlFor="senha">Senha</label>
            <input
              type="password"
              id="senha"
              name="senha"
              placeholder="*********"
              className="rounded border-2 p-2 outline-none focus:border-primary"
              value={usuario.senha}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                atualizarEstado(e)
              }
              required
            />
          </div>
          <div className="mb-2 flex w-full flex-col gap-2">
            <label htmlFor="confirmarSenha">Confirmar Senha</label>
            <input
              type="password"
              id="confirmarSenha"
              name="confirmarSenha"
              placeholder="*********"
              className="rounded  border-2 p-2 outline-none focus:border-primary"
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                handleConfirmarSenha(e)
              }
              required
            />
          </div>
          <div className="flex w-full justify-around gap-8">
            <button
              type="submit"
              className="flex w-full justify-center rounded bg-primary
                           py-2 text-white hover:bg-primary/90"
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
                <span>Cadastrar</span>
              )}
            </button>
          </div>
          <p>
            Já possui uma conta?{" "}
            <Link
              to={"/login"}
              className="text-primary underline underline-offset-2"
            >
              Entre aqui
            </Link>
          </p>
        </form>
      </div>
    </>
  );
}
export default Cadastro;
