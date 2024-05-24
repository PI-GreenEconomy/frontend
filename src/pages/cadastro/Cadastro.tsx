function Cadastro() {
  return (
    <>
      <div
        className=" mx-auto my-20 flex h-screen place-items-center justify-center 
            font-poppins font-medium"
      >
        <div className="fundoCadastro hidden lg:block"></div>

        <form className="flex w-full max-w-[420px] flex-col justify-center gap-6 rounded-lg border border-border p-8 shadow-md">
          <h2 className=" text-left text-2xl font-bold">Crie sua conta</h2>
          <div className="flex w-full flex-col gap-2">
            <label htmlFor="nome">Nome</label>
            <input
              type="text"
              id="nome"
              name="nome"
              placeholder="Seu nome"
              className="rounded border-2 p-2 outline-none focus:border-primary "
            />
          </div>
          <div className="flex w-full flex-col gap-2">
            <label htmlFor="usuario">E-mail</label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="email@email.com"
              className="rounded border-2 p-2 outline-none focus:border-primary"
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
            />
          </div>
          <div className="flex w-full justify-around gap-8">
            <button
              type="submit"
              className="flex w-full justify-center rounded bg-primary
                           py-2 text-white hover:bg-primary/90"
            >
              <span>Entrar</span>
            </button>
          </div>
          <p>
            Já possui uma conta?{" "}
            <a className="text-primary underline underline-offset-2" href="./">
              Entre aqui
            </a>
          </p>
        </form>
      </div>
    </>
  );
}
export default Cadastro;
