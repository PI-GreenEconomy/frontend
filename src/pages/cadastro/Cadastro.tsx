import { Link } from "react-router-dom";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Usuario, { FuncaoUsuario } from "../../models/Usuario";
import { formSchema } from "./validacaoCadastro";

import { useCadastro } from "../../hooks/useCadastro";
import InputField from "../../components/ui/InputField";
import { Spinner } from "../../components/ui/Spinner";

const opcoesTipoUsuario: FuncaoUsuario[] = ["USUARIO", "VENDEDOR"];

function Cadastro() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<Usuario>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nome: "",
      usuario: "",
      senha: "",
      confirmarSenha: "",
      foto: "",
      funcao: "USUARIO",
    },
  });

  const { isLoading, cadastrarNovoUsuario } = useCadastro();

  return (
    <div className="w-full bg-[#F9F9F9] px-4 py-8 text-foreground">
      <div className="container max-w-[420px] rounded-lg border border-border bg-white p-8 shadow-md">
        <div className="mb-8 flex flex-col gap-1">
          <h2 className="text-2xl font-medium text-foreground sm:text-[2rem]">
            Crie sua conta
          </h2>
        </div>
        <form
          className="mb-5 flex flex-col justify-center gap-5"
          onSubmit={handleSubmit(cadastrarNovoUsuario)}
        >
          <InputField
            id="nome"
            type="text"
            placeholder="Seu nome"
            label="Nome"
            register={register}
            errors={errors}
          />
          <InputField
            id="usuario"
            type="text"
            placeholder="email@email.com"
            label="E-mail"
            register={register}
            errors={errors}
          />
          <InputField
            id="foto"
            type="text"
            placeholder="URL da foto"
            label="Foto"
            register={register}
            errors={errors}
          />
          <InputField
            id="senha"
            type="password"
            placeholder="*********"
            label="Senha"
            register={register}
            errors={errors}
          />
          <InputField
            id="confirmarSenha"
            type="password"
            placeholder="*********"
            label="Confirmar Senha"
            register={register}
            errors={errors}
          />

          <div className="flex w-full flex-col gap-1">
            <label
              className={`text-sm font-medium after:ml-1 after:text-destructive after:content-['*'] sm:text-base`}
              htmlFor="funcao"
            >
              Tipo de Usuário
            </label>
            <select
              id="funcao"
              className="rounded-md border border-[#CBD5E1] p-2 outline-none placeholder:text-[#94A3B8] focus:border-primary"
              {...register("funcao")}
            >
              <option value="" disabled>
                Tipo de usuário
              </option>
              {opcoesTipoUsuario.map((tipo) => (
                <option key={tipo} value={tipo} className="capitalize">
                  {tipo === "VENDEDOR" ? "Vendedor" : "Cliente"}
                </option>
              ))}
            </select>
          </div>

          <button
            type="submit"
            className="flex justify-center rounded-lg bg-primary py-2 text-white hover:bg-primary/90 focus:bg-primary/90"
          >
            {isLoading ? (
              <Spinner
                strokeColor="white"
                strokeWidth="5"
                animationDuration="0.75"
                width="24"
              />
            ) : (
              <span className="font-medium capitalize">Cadastrar</span>
            )}
          </button>
        </form>
        <p className="text-sm">
          Já possui uma conta?{" "}
          <Link
            to="/login"
            className="font-medium text-primary hover:underline focus:underline"
          >
            Entre aqui
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Cadastro;
